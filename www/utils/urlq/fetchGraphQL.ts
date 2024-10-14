import { registerUrql } from "@urql/next/rsc"; // Using RSC for server-side querying
import { makeClient } from "./server/client";

const { getClient } = registerUrql(makeClient);

export async function fetchGraphQL(query: string, variables = {}) {
  try {
    const result = await getClient().query(query, variables).toPromise();

    if (result.error) {
      console.error("GraphQL Error:", result.error.graphQLErrors);
      console.error("Network Error:", result.error.networkError);
      throw new Error("Error fetching data from GraphQL");
    }

    return result.data;
  } catch (error) {
    console.error("Fetch error:", error);
    return null;
  }
}
