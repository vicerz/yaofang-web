
import type { CodegenConfig } from '@graphql-codegen/cli';

const config: CodegenConfig = {
    overwrite: true,
    schema: [
        {
            'https://wapi.manbingjiluben.com/v1/graphql': {
                headers: {
                    "Hasura-Client-Name": "hasura-console",
                    "x-hasura-admin-secret": "ts123qwe",
                },
                method: 'POST',
            },
        },
    ],
    documents: ['src/**/*.{ts,tsx}', '!graphql/**/*'],
    ignoreNoDocuments: true, // for better experience with the watcher
    generates: {
        "./src/graphql/": {
            preset: 'client',
            config: {
                skipTypename: true,
            },
        },
        "./schema.graphql": {
            plugins: ['schema-ast'],
            config: {
                skipTypename: true,
            },
        },
    }
};

export default config;
