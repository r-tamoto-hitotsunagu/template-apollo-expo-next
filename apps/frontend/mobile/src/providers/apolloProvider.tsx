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
import { ENV } from '../envVars';

// TODO: envから読み込む
const httpLink = new HttpLink({
  uri: ENV.API_URI,
});

// TODO: envから読み込む
const wsLink = new GraphQLWsLink(
  createClient({
    url: ENV.WS_URI,
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
