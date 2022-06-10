import * as React from 'react';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { ApolloProvider } from './apolloProvider';

type Props = {
  children: React.ReactNode;
};

export const AppProvider = ({ children }: Props) => {
  return (
    <ApolloProvider>
      <SafeAreaProvider>{children}</SafeAreaProvider>
    </ApolloProvider>
  );
};
