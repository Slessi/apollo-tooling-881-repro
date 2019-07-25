Repro for https://github.com/apollographql/apollo-tooling/issues/881

Repro steps:
```sh
npm i
npm test
```

Failing output:
```
✗ npm test

> apollo-tooling-881-repro@1.0.0 test /Users/edward/Projects/apollo-tooling-881-repro
> apollo client:codegen --localSchemaFile=schema.graphql --target=typescript

⚠️  It looks like there are 0 files associated with this Apollo Project. This may be because you don't have any files yet, or your includes/excludes fields are configured incorrectly, and Apollo can't find your files. For help configuring Apollo projects, see this guide: https://bit.ly/2ByILPj
  ✔ Loading Apollo Project
  ✖ Generating query files with 'typescript' target
    → No operations or fragments found to generate code for.
Error: No operations or fragments found to generate code for.
    at write (~/Projects/apollo-tooling-881-repro/node_modules/apollo/src/commands/client/codegen.ts:170:25)
    at Task.task (~/Projects/apollo-tooling-881-repro/node_modules/apollo/src/commands/client/codegen.ts:213:36)
npm ERR! Test failed.  See above for more details.
```

Workaround in [apollo.config.ts](apollo.config.ts):

```ts
// Fails
module.exports = {
    client: {
        name: "test",
        includes: ["src/**/*.graphql"],
        addTypename: true,
    },
} as ApolloConfigFormat;

// Works
module.exports = {
    client: {
        name: "test",
        includes: ["../src/**/*.graphql"],
        addTypename: true,
    },
} as ApolloConfigFormat;
```
