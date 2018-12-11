const express = require('express');
const graphqlHTTP = require('express-graphql');
const { graphql } = require('graphql-compose');
const { elasticApiFieldConfig } = require('graphql-compose-elasticsearch');

const { GraphQLSchema, GraphQLObjectType } = graphql;

const expressPort = process.env.port || process.env.PORT || 9201;

const generatedSchema = new GraphQLSchema({
  query: new GraphQLObjectType({
    name: 'Query',
    fields: {
      elastic50: elasticApiFieldConfig({
        host: 'https://LsxvulCKp:a500b460-73ff-4882-8d34-9df8064b3b38@scalr.api.appbase.io',
        index: 'gitxplore-latest-app',
        apiVersion: '5.0',
        log: 'trace',
      }),
    },
  }),
});

const server = express();
server.use(
  '/',
  graphqlHTTP({
    schema: generatedSchema,
    graphiql: true,
  })
);

server.listen(expressPort, () => {
  console.log(`🚀 The server is running on port ${expressPort}`);
});
