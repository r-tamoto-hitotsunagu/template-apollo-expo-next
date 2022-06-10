import { gql } from '@apollo/client';

export default gql`
  subscription AddedUser {
    addedUser {
      id
      name
      birthDate
    }
  }
`;
