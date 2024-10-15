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
  documents: "**/*.graphql",
  generates: {
    "./app/generated/": {
      preset: "client",
      plugins: [],
    },
  },
};

export default config;
