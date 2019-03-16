const express = require("express");
const { ApolloServer, gql } = require("apollo-server-express");

const app = express();

const typeDefs = gql`
  type Query {
    hello: String!
  }
`;

const resolvers = {
  Query: {
    hello: () => `Hello`
  }
};

const server = new ApolloServer({ typeDefs, resolvers });

server.applyMiddleware({ app });

module.exports = app;
