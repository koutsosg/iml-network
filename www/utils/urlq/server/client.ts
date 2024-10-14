import { createClient, cacheExchange, fetchExchange } from "@urql/core";

// Utility to create a reusable GraphQL client
export const makeClient = () =>
  createClient({
    url: process.env.NEXT_PUBLIC_HASURA_PROJECT_ENDPOINT as string,
    fetchOptions: {
      headers: {
        "x-hasura-admin-secret": process.env.HASURA_ADMIN_SECRET as string,
      },
    },
    exchanges: [cacheExchange, fetchExchange],
  });
