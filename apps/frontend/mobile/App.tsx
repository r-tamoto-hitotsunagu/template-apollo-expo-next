import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import {
  ApolloClient,
  InMemoryCache,
  ApolloProvider,
} from '@apollo/client';
import { Users } from './src/Users';

const client = new ApolloClient({
  // link: createHttpLink({ uri: 'http://192.168.0.6:3000/graphql' }),
  // uri: 'http://192.168.0.6:3000/graphql',
  uri: 'http://172.31.98.229:3000/graphql',
  cache: new InMemoryCache(),
});

export default function App() {
  return (
      <ApolloProvider client={client}>
    <View style={styles.container}>
      <Text>Open up App.tsx to start working on your app!</Text>
      <Users/>
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
