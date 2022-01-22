const express = require('express');
const cors = require('cors');
const graphqlHTTP = require('express-graphql');
const { graphql } = require('graphql-compose');
const { elasticApiFieldConfig } = require('graphql-compose-elasticsearch');

const { GraphQLSchema, GraphQLObjectType } = graphql;

const expressPort = process.env.port || process.env.PORT || 9201;

const generatedSchema = new GraphQLSchema({
  query: new GraphQLObjectType({
    name: 'Query',
    fields: {
      elastic77: elasticApiFieldConfig({
        host: 'https://nY6NNTZZ6:27b76b9f-18ea-456c-bc5e-3a5263ebc63d@scalr.api.appbase.io',
        index: 'good-books-ds',
        apiVersion: '5.0',
        log: 'debug',
      }),
    },
  }),
});


const server = express();

server.use(
  '/',
  cors(),
  graphqlHTTP({
    schema: generatedSchema,
    graphiql: true,
  })
);

server.listen(expressPort, () => {
  console.log(`🚀 The server is running on port ${expressPort}`);
});
