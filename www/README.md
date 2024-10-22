# Introduction

This repository documents a project I started for a friend who wanted to enhance his podcast website hosted on Transistor.fm. In this space, I’m sharing the journey of how it all began and the thought process I went through to develop a solution that enables him to add more detailed content to his episodes.

While Transistor.fm offers excellent podcast management features, its design limitations on the auto-generated website prompted me to create a more flexible solution. Below, I outline the challenges I faced, the technology stack I selected, and the implementation steps taken to improve the overall experience.

## chapter 0 : Transistor

Transistor.fm is a user-friendly podcast hosting platform that allows users to manage multiple podcasts within a single account. It offers features such as automatic distribution, in-depth analytics, dynamic ad insertion, and support for private podcasts. Additionally, it enables auto-posting to YouTube.

Each podcast hosted on Transistor is provided with an RSS feed, a crucial component for distributing content to various platforms. This RSS feed contains essential metadata, including episode titles, descriptions, and audio file links, which podcast directories like Apple Podcasts, Spotify, and Google Podcasts use to display and stream your content.

Once your podcast is hosted on Transistor, you can submit the RSS feed to these platforms, ensuring that your episodes are automatically updated across all directories whenever new content is released.

Transistor also auto-generates a webpage for your podcast with several theme options. However, the platform offers limited flexibility in terms of design and customization.

---

## Chapter 1: Main Challenge

A friend came to me with a request regarding his podcast website hosted on Transistor.fm. The built-in website functionality was too limited for his needs, as he wanted to include extra information about the podcast episodes, such as images and additional text. The challenge was finding a fast and relatively simple solution that would allow him to add these details without being constrained by Transistor's design limitations.

This challenge intrigued me, and it presented a great opportunity to experiment with some new technologies while solving the problem.

---

### Implipentation

After careful consideration, I decided on a tech stack that would allow me to implement the solution efficiently:

- **Hasura**: I chose Hasura because it provides a PostgreSQL database and supports GraphQL, which simplifies data fetching and mutations. Additionally, Hasura Cloud makes it easy to transition from a local development environment to cloud-based infrastructure.
- **Next.js**: I opted for Next.js since it's a framework I'm already familiar with, and it integrates well with Hasura. Furthermore, Next.js allows easy deployment via Vercel, and it supports the connection to Hasura for seamless data handling.
- **Docker Desktop**: Docker Desktop was essential for managing the local development environment. It allows me to containerize the entire stack, making it easier to replicate the setup across different machines or environments. This ensures consistency, whether working locally or deploying to production.

---

## Chapter 2: Rss Parser

We needed a way to fetch and edit the podcast data while adding additional information, such as images and extra text, without affecting the data stored in Transistor’s database.

---

### Implipentation

We created an RSS parser library to pull the necessary data from Transistor’s RSS feed. This library extracts the episode titles, descriptions, and other metadata from the feed, which we then store in our own database, allowing us to enrich the content with additional information.

---

## Chapter 3: Dashboard

The next issue was where to place the admin dashboard so the admin could easily edit the data without affecting the final product.

### Implipentation

We decided to create three different pages: one for the podcast network that hosts all the podcasts, and one for each podcast. The admin dashboard would be placed on the network page at `"network"/admin`.

---

## Chapter 4: Authentication

To make sure only the admin has access to the dashboard, we needed to implement a secure authorization system.

### Implipentation

Since we didn't want a login system for general users, the best way to manage access control for the admin dashboard was by implementing session-based authentication. To keep the process simple, I chose to use an HTTP-only cookie to store the JWT. This is secure and easy to implement.

- I created an API route (`/api/login`) that verifies credentials and sets the JWT token using `cookies()` from `next/headers`. The credentials are stored in an `.env` file.
- The frontend uses a `LogIn` component, a client-side form that sends the credentials to the `/api/login` route. After successful authentication, it handles the response and redirects the admin from the login page to the dashboard.
- **Authentication Check**: Other parts of the app, such as the dashboard, check for the `authToken` cookie using `cookies()` in server-side components. The token is verified using `jsonwebtoken`. If the token is not present, the user is redirected to the login page.

## Chapter 5:

Pending....
