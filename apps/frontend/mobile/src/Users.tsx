import { Text, View } from 'react-native';
import { useUserList } from './features/userList/hooks/useUserList';

export function Users() {
  const { loading, users } = useUserList();

  if (loading) {
    return <Text>Loading...</Text>;
  }

  if (users.length === 0) {
    return <Text>Not found</Text>;
  }

  return (
    <>
      {users.map((user) => {
        return (
          <View key={user?.id ?? ''}>
            <Text>{user?.name ?? ''}</Text>
            <Text>{user?.birthDate ?? ''}</Text>
          </View>
        );
      })}
    </>
  );
}
