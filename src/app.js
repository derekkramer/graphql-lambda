const express = require('express');
const bodyParser = require('body-parser');

const expressGraphQL = require('express-graphql');

// let's import the schema file we just created
const GraphQLSchema = require('./graphql/schema');


const app = express();

app.use(bodyParser.json({ limit: '50mb' }));

app.use(
  '/',
  expressGraphQL(() => ({ graphiql: true, schema: GraphQLSchema })),
);

module.exports = app;
