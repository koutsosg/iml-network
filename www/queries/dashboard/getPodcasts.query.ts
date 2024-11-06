import { graphql } from "@utils/codegen";

export const getPodcasts = graphql(`
  query getPodcasts {
    podcasts {
      id
      title
      slug
    }
  }
`);
