import { Text } from 'react-native';
import { useGetUserByIdQuery } from './graphql';

export function Users() {
  // const [user, { data, loading, error }] = useGetUserByIdLazyQuery({
  //   variables: {
  //     input: {
  //       id: '01G4D9G045NRB9QT1MP8XJ70KW',
  //     },
  //   },
  // });
  // const { loading, error, data } = useQuery(Pokemon, {
  //   pollInterval: 5000,
  // });

  const { loading, error, data } = useGetUserByIdQuery({
    variables: {
      input: {
        id: '01G4X2SN36JNRX6JJSKX4DZEX3',
      },
    },
  });

  console.log( 'loading', loading);
  console.log( 'error', error);
  console.log( 'data', data);


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
        <Text>{data.userById?.id ?? ''}</Text>
        <Text>{data.userById?.name ?? ''}</Text>
        <Text>{data.userById?.birthDate ?? ''}</Text>
      </>
  )

}
