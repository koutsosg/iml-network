# Introduction

This repository documents a project I started for a friend who wanted to enhance his podcast website hosted on Transistor.fm. In this space, I’m sharing the journey of how it all began and the thought process I went through to develop a solution that enables him to add more detailed content to his episodes.

While Transistor.fm offers excellent podcast management features, its design limitations on the auto-generated website prompted me to create a more flexible solution. Below, I outline the challenges I faced, the technology stack I selected, and the implementation steps taken to improve the overall experience.

## Chapter 0 : Transistor

Transistor.fm is a user-friendly podcast hosting platform that allows users to manage multiple podcasts within a single account. It offers features such as automatic distribution, in-depth analytics, dynamic ad insertion, and support for private podcasts. Additionally, it enables auto-posting to YouTube.

Each podcast hosted on Transistor is provided with an RSS feed, a crucial component for distributing content to various platforms. This RSS feed contains essential metadata, including episode titles, descriptions, and audio file links, which podcast directories like Apple Podcasts, Spotify, and Google Podcasts use to display and stream your content.

Once your podcast is hosted on Transistor, you can submit the RSS feed to these platforms, ensuring that your episodes are automatically updated across all directories whenever new content is released.

Transistor also auto-generates a webpage for your podcast with several theme options. However, the platform offers limited flexibility in terms of design and customization.

---

## Chapter 1: Main Challenge

A friend came to me with a request regarding his podcast website hosted on Transistor.fm. The built-in website functionality was too limited for his needs, as he wanted to include extra information about the podcast episodes, such as images and additional text. The challenge was finding a fast and relatively simple solution that would allow him to add these details without being constrained by Transistor's design limitations.

This challenge intrigued me, and it presented a great opportunity to experiment with some new technologies while solving the problem.

---

### Approach

After careful consideration, I decided on a tech stack that would allow me to implement the solution efficiently:

- **Hasura**: I chose Hasura because it provides a PostgreSQL database and supports `GraphQL`,and We can use the `urql` library to simplify data fetching and mutations from GraphQL.
  . Additionally, Hasura Cloud makes it easy to transition from a local development environment to cloud-based infrastructure.
- **Next.js**: I opted for Next.js since it's a framework I'm already familiar with, and it integrates well with Hasura. Furthermore, Next.js allows easy deployment via Vercel, and it supports the connection to Hasura for seamless data handling.
- **Docker Desktop**: Docker Desktop was essential for managing the local development environment. It allows me to containerize the entire stack, making it easier to replicate the setup across different machines or environments. This ensures consistency, whether working locally or deploying to production.

---

## Chapter 2: Rss Parser

We needed a way to fetch and edit the podcast data while adding additional information, such as images and extra text, without affecting the data stored in Transistor’s database.

---

### Method

We created an RSS parser library to pull the necessary data from Transistor’s RSS feed. This library extracts the episode titles, descriptions, and other metadata from the feed, which we later find a way to store in our own database, allowing us to enrich the content with additional information.

---

## Chapter 3: Dashboard Location

The next issue was where to place the admin dashboard so the admin could easily edit the data without affecting the final product.

### Setup

We decided to create three different pages: one for the podcast network that hosts all the podcasts, and one for each podcast. The admin dashboard would be placed on the network page at `"network"/admin`.

---

## Chapter 4: Authentication

To make sure only the admin has access to the dashboard, we needed to implement a secure authorization system.

### Authorization Process

Since we didn't want a login system for general users, the best way to manage access control for the admin dashboard was by implementing session-based authentication. To keep the process simple, I chose to use an HTTP-only cookie to store the JWT. This is secure and easy to implement.

- I created an API route (`/api/login`) that verifies credentials and sets the JWT token using `cookies()` from `next/headers`. The credentials are stored in an `.env` file.
- The frontend uses a `LogIn` component, a client-side form that sends the credentials to the `/api/login` route. After successful authentication, it handles the response and redirects the admin from the login page to the dashboard.
- **Authentication Check**: Other parts of the app, such as the dashboard, check for the `authToken` cookie using `cookies()` in server-side components. The token is verified using `jsonwebtoken`. If the token is not present, the user is redirected to the login page.

## Chapter 5: Hasura Database

Once we had the main idea and the structure in place, it was time to initialize the database and design the tables. I needed to figure out how to split the data into tables effectively.

### Initialize

The RSS feed provides essential data for the podcasts, including an array of episodes and their details. Based on this, we designed the following database schema:

- A table for the podcast data, where the primary key (`id`) is the GUID of the podcast as provided by the RSS feed.
- A table for the episode data, with the primary key (`id`) being the GUID of each episode from the RSS feed. This table includes a field linking each episode to its corresponding podcast.
- A table for people involved in the episodes and podcasts (such as hosts and guests), containing information like names, pictures, and roles (guest or host).
- Two additional tables: one for linking people to episodes and another for linking people to podcasts. This ensures flexibility in managing the relationships between people and their respective podcasts or episodes.
- A table for extra images that we want to add, which will be used to enrich the podcast and episode content with visual elements.

This is where Hasura's console proves useful once again. It offers a raw SQL functionality, allowing us to write and execute SQL code to build the necessary tables efficiently.

## Chapter 6: Dashboard

Now it's time to decide how the admin dashboard will function. First, we need to initialize the basic structure.

### Functionality

Once the admin logs in, they will be able to edit the network page data (this part will be kept for later). Below that, we will add a section for selecting a podcast.

Under the **My Podcasts** header, the data returned from our database will display as "Podcast1 name" for the first RSS feed link, and "Podcast2 name" for the second. (For now, we will manually add test data to Hasura.) These will be clickable buttons that redirect to a link such as `/dashboard/podcast/`id`, where the admin can edit the podcast’s details.

Below the podcast data, the admin will also be able to select individual episodes. Each selected episode will redirect to a link like `/dashboard/podcast/`id`/episode/`id`, allowing further editing of the episode's details.

To achieve this structure, we will use **Dynamic Routes** from Next.js.

## Chapter 7: Graphql Mutation

In order to be able to do mutations we need to fix the client provider for urql amd securely authenticate requests from the admin dashboard to Hasura, we implemented JSON Web Tokens (JWT) to handle authorization for GraphQL queries and mutations.

### Setting Up JWT Authentication

Hasura requires a valid JWT to authenticate requests. We needed a method to generate and validate these tokens to ensure that only the admin can access or modify data through the GraphQL API. The following steps outline the JWT configuration process:

1. **Generate and Sign JWT**: In our login API (`/api/login`), we generate a signed JWT upon successful login. We include custom claims to set the user’s role and other permissions:

   - The JWT payload includes:
     - `role`: specifies the role as "admin"
     - `https://hasura.io/jwt/claims`: contains Hasura-specific claims, such as `x-hasura-allowed-roles` (e.g., "admin") and `x-hasura-default-role` ("admin")

   ```javascript
   const token = jwt.sign(
     {
       role: "admin",
       "https://hasura.io/jwt/claims": {
         "x-hasura-allowed-roles": ["admin"],
         "x-hasura-default-role": "admin",
       },
     },
     process.env.JWT_SECRET,
     { expiresIn: "1h" }
   );
   ```

2. Configure Hasura for JWT Verification: We added the necessary environment variable to Hasura to accept and verify the JWT with the provided JWT_SECRET. This allows Hasura to automatically parse the token’s payload and enforce role-based permissions on API requests.

- Set the HASURA_GRAPHQL_JWT_SECRET environment variable in Hasura, using the same secret key as in our application.

3. Client-Side Integration: We modified our Next.js components to retrieve the JWT and include it in GraphQL requests:

- In ClientProvider, the authToken cookie is passed in the Authorization header as a Bearer token.
- When making GraphQL requests, Hasura verifies the token’s validity and permissions based on the claims.

### Troubleshooting JWSError JWSInvalidSignature

Initially, we encountered an issue where Hasura returned an invalid signature error (JWSError JWSInvalidSignature). The issue was resolved by ensuring the following:

- The JWT secret used in both Hasura and the app matched exactly.
- The authToken was being correctly retrieved from cookies and added to headers in client requests.

Once configured correctly, JWT authentication allowed us to securely restrict access to Hasura, ensuring only authenticated requests from the admin dashboard were authorized to make changes to the database.

## Chapter 8:
