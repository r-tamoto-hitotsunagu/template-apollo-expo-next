import { gql } from '@apollo/client';

export default gql`
  mutation Mutation($input: CreateUserInput!) {
    createUser(input: $input) {
      id
      name
      birthDate
      createdAt
      updatedAt
    }
  }
`;
