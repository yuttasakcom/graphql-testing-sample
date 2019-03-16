import express from "express";
import { ApolloServer, gql } from "apollo-server-express";
import prisma from "./prisma";

const app = express();

const typeDefs = gql`
  type Query {
    users: [User!]!
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
    id: String!
    name: String!
    email: String!
    password: String!
  }
`;

const resolvers = {
  Query: {
    users: async () => await prisma.query.users()
  },
  Mutation: {
    async createUser(_, { data }, { prisma }, info) {
      return await prisma.mutation.createUser({ data }, info);
    }
  }
};

const server = new ApolloServer({
  typeDefs,
  resolvers,
  context: {
    prisma
  }
});

server.applyMiddleware({ app });

export default app;
