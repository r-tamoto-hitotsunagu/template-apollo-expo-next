import { gql } from '@apollo/client';
import * as Apollo from '@apollo/client';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
const defaultOptions = {} as const;
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
  /** A date string, such as 2007-12-03, compliant with the `full-date` format outlined in section 5.6 of the RFC 3339 profile of the ISO 8601 standard for representation of dates and times using the Gregorian calendar. */
  Date: any;
  /** A date-time string at UTC, such as 2007-12-03T10:15:30Z, compliant with the `date-time` format outlined in section 5.6 of the RFC 3339 profile of the ISO 8601 standard for representation of dates and times using the Gregorian calendar. */
  DateTime: any;
  /** A field whose value conforms to the standard internet email address format as specified in RFC822: https://www.w3.org/Protocols/rfc822/. */
  EmailAddress: any;
  /** A field whose value conforms to the standard URL format as specified in RFC3986: https://www.ietf.org/rfc/rfc3986.txt. */
  URL: any;
};

export type CreateUserInput = {
  birthDate?: InputMaybe<Scalars['Date']>;
  name: Scalars['String'];
};

export type CreatedAt = {
  /** Time created */
  createdAt?: Maybe<Scalars['DateTime']>;
};

export type Mutation = {
  __typename?: 'Mutation';
  /** Creat user */
  createUser?: Maybe<User>;
};


export type MutationCreateUserArgs = {
  input: CreateUserInput;
};

export type Node = {
  /** GUID for a resource */
  id?: Maybe<Scalars['ID']>;
};

export type Query = {
  __typename?: 'Query';
  /** Get User from id */
  userById?: Maybe<User>;
  /** Get User from user name */
  userByName?: Maybe<User>;
};


export type QueryUserByIdArgs = {
  input: UserByIdInput;
};


export type QueryUserByNameArgs = {
  input: UserByNameInput;
};

export type UpdatedAt = {
  /** Time updated */
  updatedAt?: Maybe<Scalars['DateTime']>;
};

export type User = CreatedAt & Node & UpdatedAt & {
  __typename?: 'User';
  birthDate?: Maybe<Scalars['Date']>;
  /** Time created */
  createdAt?: Maybe<Scalars['DateTime']>;
  /** GUID for a resource */
  id?: Maybe<Scalars['ID']>;
  name?: Maybe<Scalars['String']>;
  /** Time updated */
  updatedAt?: Maybe<Scalars['DateTime']>;
};

export type UserByIdInput = {
  id: Scalars['String'];
};

export type UserByNameInput = {
  name: Scalars['String'];
};

export type MutationMutationVariables = Exact<{
  input: CreateUserInput;
}>;


export type MutationMutation = { __typename?: 'Mutation', createUser?: { __typename?: 'User', id?: string | null, name?: string | null, birthDate?: any | null, createdAt?: any | null, updatedAt?: any | null } | null };

export type GetUserByIdQueryVariables = Exact<{
  input: UserByIdInput;
}>;


export type GetUserByIdQuery = { __typename?: 'Query', userById?: { __typename?: 'User', id?: string | null, name?: string | null, birthDate?: any | null } | null };


export const MutationDocument = gql`
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
export type MutationMutationFn = Apollo.MutationFunction<MutationMutation, MutationMutationVariables>;

/**
 * __useMutationMutation__
 *
 * To run a mutation, you first call `useMutationMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useMutationMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [mutationMutation, { data, loading, error }] = useMutationMutation({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export function useMutationMutation(baseOptions?: Apollo.MutationHookOptions<MutationMutation, MutationMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<MutationMutation, MutationMutationVariables>(MutationDocument, options);
      }
export type MutationMutationHookResult = ReturnType<typeof useMutationMutation>;
export type MutationMutationResult = Apollo.MutationResult<MutationMutation>;
export type MutationMutationOptions = Apollo.BaseMutationOptions<MutationMutation, MutationMutationVariables>;
export const GetUserByIdDocument = gql`
    query GetUserById($input: UserByIdInput!) {
  userById(input: $input) {
    id
    name
    birthDate
  }
}
    `;

/**
 * __useGetUserByIdQuery__
 *
 * To run a query within a React component, call `useGetUserByIdQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetUserByIdQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetUserByIdQuery({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export function useGetUserByIdQuery(baseOptions: Apollo.QueryHookOptions<GetUserByIdQuery, GetUserByIdQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetUserByIdQuery, GetUserByIdQueryVariables>(GetUserByIdDocument, options);
      }
export function useGetUserByIdLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetUserByIdQuery, GetUserByIdQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetUserByIdQuery, GetUserByIdQueryVariables>(GetUserByIdDocument, options);
        }
export type GetUserByIdQueryHookResult = ReturnType<typeof useGetUserByIdQuery>;
export type GetUserByIdLazyQueryHookResult = ReturnType<typeof useGetUserByIdLazyQuery>;
export type GetUserByIdQueryResult = Apollo.QueryResult<GetUserByIdQuery, GetUserByIdQueryVariables>;