import { graphql } from "@utils/generated";

export const updatePodcast = graphql(`
  mutation updatePodcast($id: uuid!, $title: String!, $description: String!) {
    update_podcasts_by_pk(
      pk_columns: { id: $id }
      _set: { title: $title, description: $description }
    ) {
      id
      title
      description
    }
  }
`);
