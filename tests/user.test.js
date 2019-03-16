import "cross-fetch/polyfill";
import ApolloBoost, { gql } from "apollo-boost";
import prisma from "../src/prisma";

const client = new ApolloBoost({
  uri: "http://localhost:4000/graphql"
});

beforeEach(async () => {
  await prisma.mutation.deleteManyUsers();
});

test("should create a new user", async () => {
  const createUser = gql`
    mutation {
      createUser(
        data: { name: "tester", email: "test@test.com", password: "test1234" }
      ) {
        id
        name
        email
        password
      }
    }
  `;

  const response = await client.mutate({
    mutation: createUser
  });

  const exists = await prisma.exists.User({
    id: response.data.createUser.id
  });

  expect(exists).toBe(true);
});
