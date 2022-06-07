import { Text, View } from 'react-native';
import { useGetUserByIdQuery, useUsersQuery } from './graphql';

export function Users() {
  const { loading, error, data } = useUsersQuery({
    // pollInterval: 500,
    fetchPolicy: 'no-cache',
  });

  if (loading) {
    return <Text>Loading...</Text>;
  }

  if (error) {
    return <Text>Error :(</Text>;
  }

  if (data === undefined) {
    return <Text>Not found</Text>;
  }

  return (
    <>
      {data.users?.map((user) => {
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
