import { ApolloConfigFormat } from "apollo-language-server/lib/config";

module.exports = {
    client: {
        name: "test",
        // https://github.com/apollographql/apollo-tooling/issues/881
        // includes: ["../src/**/*.graphql"],
        includes: ["src/**/*.graphql"],
        addTypename: true,
    },
} as ApolloConfigFormat;
