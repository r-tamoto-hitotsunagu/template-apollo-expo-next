import { SafeAreaView, StyleSheet, Button } from 'react-native';
import { UserList } from '../components';
import { useNav } from '../hooks/useNav';

export const UserListScreen = () => {
  const nav = useNav();

  return (
    <SafeAreaView style={styles.container}>
      <UserList />
      <Button
        title="User Register"
        onPress={() => nav.navigate('AddUserScreen')}
      />
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
