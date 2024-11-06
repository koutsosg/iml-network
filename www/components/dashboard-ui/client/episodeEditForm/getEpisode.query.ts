import { graphql } from "@utils/codegen";

export const getEpisode = graphql(`
  query getEpisode($id: uuid!) {
    episodes_by_pk(id: $id) {
      id
      author
      description
      episode_type
      image_url
      image_title
      keywords
      link
      media_length
      media_type
      media_url
      pub_date
      season
      title
      chapters_type
      chapters_url
      podcast_id
    }
  }
`);
/* podcast {
  title
} */
