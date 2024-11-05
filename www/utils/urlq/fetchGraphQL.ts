import { getRscClient } from "./server";
import { DocumentNode } from "graphql"; // Import the DocumentNode type

export async function fetchGraphQL<T = any>(
  query: DocumentNode | string, // Allow both DocumentNode and string
  variables = {},
): Promise<T> {
  try {
    const result = await getRscClient()
      .query(query, variables)
      .toPromise()
      .then((r) => r.data ?? {});

    if (result.error) {
      console.error("GraphQL Error:", result.error.graphQLErrors);
      console.error("Network Error:", result.error.networkError);
      throw new Error("Error fetching data from GraphQL");
    }

    return result;
  } catch (error) {
    console.error("Fetch error:", error);
    return {} as T;
  }
}
