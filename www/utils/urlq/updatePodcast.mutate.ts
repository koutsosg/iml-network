import { graphql } from "@utils/generated";

export const updatePodcast = graphql(`
  mutation updatePodcast(
    $id: uuid!
    $description: String!
    $author: String!
    $categories: [String!]!
    $copyright: String!
    $funding_url: String!
    $image_title: String!
    $image_url: String!
    $keywords: [String!]!
    $owner_email: String!
    $owner_name: String!
  ) {
    update_podcasts_by_pk(
      pk_columns: { id: $id }
      _set: {
        description: $description
        author: $author
        categories: $categories
        copyright: $copyright
        funding_url: $funding_url
        image_title: $image_title
        image_url: $image_url
        keywords: $keywords
        owner_email: $owner_email
        owner_name: $owner_name
      }
    ) {
      id
      description
      author
      categories
      copyright
      funding_url
      image_title
      image_url
      keywords
      owner_email
      owner_name
    }
  }
`);
