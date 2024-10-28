import { graphql } from "@utils/generated";

export const updatePodcast = graphql(`
  mutation updatePodcast($id: uuid!, $title: String!) {
    update_podcasts_by_pk(pk_columns: { id: $id }, _set: { title: $title }) {
      id
      title
    }
  }
`);
