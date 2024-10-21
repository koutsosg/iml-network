import {
  Client,
  dedupExchange,
  cacheExchange,
  fetchExchange,
} from "@urql/core";

export const urqlClient = new Client({
  url: "http://localhost:8080/v1/graphql", // Your Hasura GraphQL endpoint
  exchanges: [dedupExchange, cacheExchange, fetchExchange],
  fetchOptions: () => {
    // Get the JWT token from cookies
    const token = document.cookie
      .split("; ")
      .find((row) => row.startsWith("authToken="));
    return {
      headers: {
        Authorization: token ? `Bearer ${token.split("=")[1]}` : "",
        "Content-Type": "application/json",
      },
    };
  },
});
