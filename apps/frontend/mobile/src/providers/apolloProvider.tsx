import * as React from 'react';
import {
  ApolloClient,
  InMemoryCache,
  ApolloProvider as BaseApolloProvider,
  HttpLink,
  split,
} from '@apollo/client';
import { GraphQLWsLink } from '@apollo/client/link/subscriptions';
import { getMainDefinition } from '@apollo/client/utilities';
import { createClient } from 'graphql-ws';

// TODO: envから読み込む
const httpLink = new HttpLink({
  uri: 'http://192.168.0.6:3000/graphql',
});

// TODO: envから読み込む
const wsLink = new GraphQLWsLink(
  createClient({
    url: 'ws://192.168.0.6:3000/graphql',
    connectionParams: {
      // TODO: change auth token
      authToken: 'testToken',
    },
  })
);

const splitLink = split(
  ({ query }) => {
    const definition = getMainDefinition(query);
    return (
      definition.kind === 'OperationDefinition' &&
      definition.operation === 'subscription'
    );
  },
  wsLink,
  httpLink
);

const client = new ApolloClient({
  link: splitLink,
  cache: new InMemoryCache(),
});

type Props = {
  children: React.ReactNode | React.ReactNode[];
};

export const ApolloProvider = ({ children }: Props) => {
  return <BaseApolloProvider client={client}>{children}</BaseApolloProvider>;
};
