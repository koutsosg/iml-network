import { makeClient } from "./server/client";
import { registerUrql } from "@urql/next/rsc";

export async function fetchGraphQL(query: string, variables = {}) {
  const { getClient } = registerUrql(makeClient);
  try {
    const result = await getClient().query(query, variables).toPromise();
    console.log("Raw GraphQL Result:", result);
    if (result.error) {
      console.error("GraphQL Error:", result.error.graphQLErrors);
      console.error("Network Error:", result.error.networkError);
      throw new Error("Error fetching data from GraphQL");
    }

    return result.data;
  } catch (error) {
    console.error("Fetch error:", error);
    return {};
  }
}
