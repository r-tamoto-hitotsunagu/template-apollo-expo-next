import { gql } from '@apollo/client';

export default gql`
  query GetUserById($input: UserByIdInput!) {
    userById(input: $input) {
      id
      name
      birthDate
    }
  }
  query Users {
    users {
      id
      name
      birthDate
    }
  }
`;
