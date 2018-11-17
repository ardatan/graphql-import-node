# GraphQL Import Node
This extension makes your NodeJS application able to import `graphql` files.

It needs to be installed `graphql` and `graphql-tag` on the project. Then, you can install it using npm or yarn;

```
yarn add graphql-import-node
```

or

```
npm i graphql-import-node
```

After that, you need to load this library before anything else.

for CommonJS;

```js
  require('graphql-import-node');
  const typeDefs = require('./schema.graphql');
  const resolvers = require('./my-resolvers');
  
  makeExecutableSchema({ typeDefs, resolvers });
```

for ES2015 and TypeScript;

```js
  import 'graphql-import-node';
  import * as typeDefs from './schema.graphql' ;
  import * as resolvers from './my-resolvers';
  
  makeExecutableSchema({ typeDefs, resolvers });
```

It supports [https://github.com/prisma/graphql-import](GraphQL-Import) syntax and TypeScript.
