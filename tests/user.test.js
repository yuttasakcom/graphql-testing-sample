import "cross-fetch/polyfill";

import ApolloBoost, { gql } from "apollo-boost";

const client = new ApolloBoost({
  uri: "http://localhost:4000/graphql"
});

test("should create a new user", async () => {
  const createUser = gql`
    mutation {
      createUser(
        data: {
          name: "yuttasak"
          email: "yuttasakcom@gmail.com"
          password: "123456"
        }
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
});
