import { Text } from 'react-native';
import { useGetUserByIdQuery, useUsersQuery } from './graphql';

export function Users() {
  const { loading, error, data } = useUsersQuery({
    pollInterval: 500
  });

  if (loading) {
    return <Text>Loading...</Text>;
  }

  if (error) {
    return <Text>Error :(</Text>;
  }

  if ( data === undefined ) {
    return <Text>Not found</Text>;
  }

  return(
      <>
        {
          data.users?.map( user => {
            return(
                <>
                  <Text>{user?.name ?? ''}</Text>
                  <Text>{user?.birthDate ??''}</Text>
                </>
            );
          })
        }
      </>
  )

}
