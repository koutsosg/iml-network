import { getRscClient } from "./server";

export async function fetchGraphQL(query: string, variables = {}) {
  try {
    const result = await getRscClient().query(query, variables).toPromise();
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
