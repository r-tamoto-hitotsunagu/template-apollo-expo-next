import {
  ApolloClient,
  InMemoryCache,
  ApolloProvider,
  HttpLink,
  split,
} from '@apollo/client';
import { GraphQLWsLink } from '@apollo/client/link/subscriptions';
import { getMainDefinition } from '@apollo/client/utilities';
import { StatusBar } from 'expo-status-bar';
import { createClient } from 'graphql-ws';
import { StyleSheet, Text, View } from 'react-native';
import { Users } from './src/Users';

const httpLink = new HttpLink({
  uri: 'http://192.168.0.6:3000/graphql',
});

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

export default function App() {
  return (
    <ApolloProvider client={client}>
      <View style={styles.container}>
        <Users />
        <StatusBar style="auto" />
      </View>
    </ApolloProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
