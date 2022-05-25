export const getUser = /* GraphQL */ `
  query GetUser($username: String!) {
    getUser(where: {username: $username}) {
      username
    }
  }
`;