const express = require("express");
const { ApolloServer, gql } = require("apollo-server-express");

const app = express();

const typeDefs = gql`
  type Query {
    hello: String!
  }

  type Mutation {
    createUser(data: CreateUserInput!): User!
  }

  input CreateUserInput {
    name: String!
    email: String!
    password: String!
  }

  type User {
    id: ID!
    name: String!
    email: String!
    password: String!
  }
`;

const resolvers = {
  Query: {
    hello: () => `Hello`
  },
  Mutation: {
    createUser: (root, { data }) => {
      return {
        id: "1",
        name: "yo",
        email: "yuttasakcom@gmail.com",
        password: "1234"
      };
    }
  }
};

const server = new ApolloServer({ typeDefs, resolvers });

server.applyMiddleware({ app });

module.exports = app;
