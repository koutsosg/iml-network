import type { CodegenConfig } from "@graphql-codegen/cli";

const config: CodegenConfig = {
  overwrite: true,
  schema: {
    [`http://localhost:8080/v1/graphql`]: {
      headers: {
        "x-hasura-admin-secret": `myadminsecretkey`,
      },
    },
  },
  documents: [
    "components/**/*.query.ts",
    "components/**/*.mutate.ts",
    "queries/**/*.query.ts",
  ],
  generates: {
    "utils/codegen/": {
      preset: "client",
      plugins: [],
    },
  },
};

export default config;
