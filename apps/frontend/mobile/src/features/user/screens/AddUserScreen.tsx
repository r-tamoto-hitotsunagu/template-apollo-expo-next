import { Button, SafeAreaView, StyleSheet } from 'react-native';
import { useNav } from '../hooks/useNav';

export const AddUserScreen = () => {
  const nav = useNav();

  return (
    <SafeAreaView style={styles.container}>
      <Button title="Back" onPress={() => nav.goBack()} />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
