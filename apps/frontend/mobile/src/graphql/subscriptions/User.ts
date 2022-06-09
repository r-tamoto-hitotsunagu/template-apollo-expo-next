import { gql } from '@apollo/client';

export default gql`
  subscription User {
    user {
      id
      name
      birthDate
    }
  }
`;
