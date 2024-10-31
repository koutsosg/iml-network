/* eslint-disable */
import * as types from './graphql';
import { TypedDocumentNode as DocumentNode } from '@graphql-typed-document-node/core';

/**
 * Map of all GraphQL operations in the project.
 *
 * This map has several performance disadvantages:
 * 1. It is not tree-shakeable, so it will include all operations in the project.
 * 2. It is not minifiable, so the string of a GraphQL query will be multiple times inside the bundle.
 * 3. It does not support dead code elimination, so it will add unused operations.
 *
 * Therefore it is highly recommended to use the babel or swc plugin for production.
 * Learn more about it here: https://the-guild.dev/graphql/codegen/plugins/presets/preset-client#reducing-bundle-size
 */
const documents = {
    "\n  query editPodcast($slug: String!) {\n    podcasts(where: { slug: { _eq: $slug } }) {\n      id\n      title\n      description\n      author\n      categories\n      copyright\n      funding_url\n      language\n      image_title\n      image_url\n      keywords\n      owner_email\n      owner_name\n    }\n  }\n": types.EditPodcastDocument,
    "\n  mutation updatePodcast(\n    $id: uuid!\n    $description: String!\n    $author: String!\n    $categories: [String!]!\n    $copyright: String!\n    $funding_url: String!\n    $image_title: String!\n    $image_url: String!\n    $keywords: [String!]!\n    $owner_email: String!\n    $owner_name: String!\n  ) {\n    update_podcasts_by_pk(\n      pk_columns: { id: $id }\n      _set: {\n        description: $description\n        author: $author\n        categories: $categories\n        copyright: $copyright\n        funding_url: $funding_url\n        image_title: $image_title\n        image_url: $image_url\n        keywords: $keywords\n        owner_email: $owner_email\n        owner_name: $owner_name\n      }\n    ) {\n      id\n      description\n      author\n      categories\n      copyright\n      funding_url\n      image_title\n      image_url\n      keywords\n      owner_email\n      owner_name\n    }\n  }\n": types.UpdatePodcastDocument,
};

/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 *
 *
 * @example
 * ```ts
 * const query = graphql(`query GetUser($id: ID!) { user(id: $id) { name } }`);
 * ```
 *
 * The query argument is unknown!
 * Please regenerate the types.
 */
export function graphql(source: string): unknown;

/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n  query editPodcast($slug: String!) {\n    podcasts(where: { slug: { _eq: $slug } }) {\n      id\n      title\n      description\n      author\n      categories\n      copyright\n      funding_url\n      language\n      image_title\n      image_url\n      keywords\n      owner_email\n      owner_name\n    }\n  }\n"): (typeof documents)["\n  query editPodcast($slug: String!) {\n    podcasts(where: { slug: { _eq: $slug } }) {\n      id\n      title\n      description\n      author\n      categories\n      copyright\n      funding_url\n      language\n      image_title\n      image_url\n      keywords\n      owner_email\n      owner_name\n    }\n  }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n  mutation updatePodcast(\n    $id: uuid!\n    $description: String!\n    $author: String!\n    $categories: [String!]!\n    $copyright: String!\n    $funding_url: String!\n    $image_title: String!\n    $image_url: String!\n    $keywords: [String!]!\n    $owner_email: String!\n    $owner_name: String!\n  ) {\n    update_podcasts_by_pk(\n      pk_columns: { id: $id }\n      _set: {\n        description: $description\n        author: $author\n        categories: $categories\n        copyright: $copyright\n        funding_url: $funding_url\n        image_title: $image_title\n        image_url: $image_url\n        keywords: $keywords\n        owner_email: $owner_email\n        owner_name: $owner_name\n      }\n    ) {\n      id\n      description\n      author\n      categories\n      copyright\n      funding_url\n      image_title\n      image_url\n      keywords\n      owner_email\n      owner_name\n    }\n  }\n"): (typeof documents)["\n  mutation updatePodcast(\n    $id: uuid!\n    $description: String!\n    $author: String!\n    $categories: [String!]!\n    $copyright: String!\n    $funding_url: String!\n    $image_title: String!\n    $image_url: String!\n    $keywords: [String!]!\n    $owner_email: String!\n    $owner_name: String!\n  ) {\n    update_podcasts_by_pk(\n      pk_columns: { id: $id }\n      _set: {\n        description: $description\n        author: $author\n        categories: $categories\n        copyright: $copyright\n        funding_url: $funding_url\n        image_title: $image_title\n        image_url: $image_url\n        keywords: $keywords\n        owner_email: $owner_email\n        owner_name: $owner_name\n      }\n    ) {\n      id\n      description\n      author\n      categories\n      copyright\n      funding_url\n      image_title\n      image_url\n      keywords\n      owner_email\n      owner_name\n    }\n  }\n"];

export function graphql(source: string) {
  return (documents as any)[source] ?? {};
}

export type DocumentType<TDocumentNode extends DocumentNode<any, any>> = TDocumentNode extends DocumentNode<  infer TType,  any>  ? TType  : never;