import GraphQL from 'graphql';

// import the user query file we created
import { index } from './queries/Post';

const {
  GraphQLObjectType,
  GraphQLSchema,
} = GraphQL;

// lets define our root query
const RootQuery = new GraphQLObjectType({
  name: 'RootQueryType',
  description: 'This is the default root query provided by our application',
  fields: {
    posts: index(),
  },
});

// export the schema
export default new GraphQLSchema({
  query: RootQuery,
});
