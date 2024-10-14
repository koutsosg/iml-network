import { makeClient } from "./server/client";

export async function fetchGraphQL(query: string, variables = {}) {
  const client = makeClient();
  try {
    const result = await client.query(query, variables).toPromise();

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
