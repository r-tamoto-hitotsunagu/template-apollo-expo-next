import { StatusBar } from 'expo-status-bar';
// TODO: aliasから読み込む
import { Navigator } from './src/navigators';
// TODO: aliasからimport
import { AppProvider } from './src/providers';

export default function App() {
  return (
    <AppProvider>
      <Navigator />
      <StatusBar style="auto" />
    </AppProvider>
  );
}
