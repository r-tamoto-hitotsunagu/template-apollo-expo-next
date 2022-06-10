import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
// TODO: aliasから読み込む
import { Users } from './src/Users';
// TODO: aliasから読み込む
import { AppProvider } from './src/providers/appProvider';

export default function App() {
  return (
    <AppProvider>
      <View style={styles.container}>
        <Users />
        <StatusBar style="auto" />
      </View>
    </AppProvider>
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
