import { graphql } from "@utils/generated";

export const getPodcast = graphql(`
  query editPodcast($slug: String!) {
    podcasts(where: { slug: { _eq: $slug } }) {
      id
      title
      description
      author
      categories
      copyright
      funding_url
      language
      image_title
      image_url
      keywords
      owner_email
      owner_name
    }
  }
`);
