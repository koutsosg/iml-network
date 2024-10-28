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
  documents: ["utils/**/*.query.ts", "utils/**/*.mutate.ts"],
  generates: {
    "utils/generated/": {
      preset: "client",
      plugins: [],
    },
  },
};

export default config;
