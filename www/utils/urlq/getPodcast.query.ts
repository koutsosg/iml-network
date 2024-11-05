import { graphql } from "@utils/generated";

export const getPodcast = graphql(`
  query getPodcast($slug: String!) {
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
      episodes(order_by: { pub_date: desc }) {
        id
        title
        author
        pub_date
        season
        image_href
        episode_type
      }
    }
  }
`);
