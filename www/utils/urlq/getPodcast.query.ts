import { graphql } from "@utils/generated";

export const getPodcast = graphql(`
  query editPodcast($slug: String!) {
    podcasts(where: { slug: { _eq: $slug } }) {
      title
      author
      categories
      copyright
      description
      owner_name
      owner_email
      language
      keywords
      image_url
      image_title
      image_link
      id
      funding_url
    }
  }
`);
