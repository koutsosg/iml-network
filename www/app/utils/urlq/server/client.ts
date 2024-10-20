import { createClient, cacheExchange, fetchExchange } from "@urql/core";

export const makeClient = () => {
  return createClient({
    url: process.env.NEXT_PUBLIC_HASURA_PROJECT_ENDPOINT as string,
    fetchOptions: {
      headers: {
        "x-hasura-admin-secret": process.env.HASURA_ADMIN_SECRET as string,
      },
    },
    exchanges: [cacheExchange, fetchExchange],
  });
};