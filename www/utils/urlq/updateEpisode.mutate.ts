import { graphql } from "@utils/generated";

export const updateEpisode = graphql(`
  mutation updateEpisode(
    $id: uuid!
    $description: String!
    $title: String!
    $image_title: String!
    $image_href: String!
    $keywords: [String!]!
    $episode_type: String!
  ) {
    update_episodes_by_pk(
      pk_columns: { id: $id }
      _set: {
        description: $description
        title: $title
        image_title: $image_title
        image_href: $image_href
        keywords: $keywords
        episode_type: $episode_type
      }
    ) {
      id
      description
      title
      image_title
      image_href
      keywords
      episode_type
    }
  }
`);
