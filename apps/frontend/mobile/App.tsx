import { StatusBar } from 'expo-status-bar';
import { Navigator } from './src/navigators';
import { AppProvider } from './src/providers';

export default function App() {
  return (
    <AppProvider>
      <Navigator />
      <StatusBar style="auto" />
    </AppProvider>
  );
}
