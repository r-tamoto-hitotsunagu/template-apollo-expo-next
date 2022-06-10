import { SafeAreaView, StyleSheet } from 'react-native';
import { UserList } from '../components';
export const UserListScreen = () => {
  return (
    <SafeAreaView style={styles.container}>
      <UserList />
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
