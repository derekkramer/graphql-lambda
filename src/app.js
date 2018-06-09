import express from 'express';
import { json } from 'body-parser';

import expressGraphQL from 'express-graphql';

// let's import the schema file we just created
import GraphQLSchema from './graphql/schema';


const app = express();

app.use(json({ limit: '50mb' }));

app.use(
  '/',
  expressGraphQL(() => ({ graphiql: true, schema: GraphQLSchema })),
);

export default app;
