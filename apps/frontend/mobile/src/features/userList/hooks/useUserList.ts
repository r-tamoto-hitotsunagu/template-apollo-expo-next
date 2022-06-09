import { useEffect } from 'react';
import { UserDocument, useUsersQuery } from '../../../graphql';
import type { User, UserSubscription } from '../../../graphql';

export const useUserList = (): {
  users: Pick<User, 'id' | 'name' | 'birthDate'>[];
  loading: boolean;
} => {
  const { loading, error, data, subscribeToMore } = useUsersQuery({
    fetchPolicy: 'cache-and-network',
  });

  useEffect(() => {
    subscribeToMore<UserSubscription>({
      document: UserDocument,
      updateQuery: (prev, { subscriptionData }) => {
        if (!subscriptionData.data) {
          return prev;
        }

        return Object.assign({}, prev, {
          users: [...(prev.users ?? []), subscriptionData.data.user],
        });
      },
    });
  }, [subscribeToMore]);

  if (loading) {
    return {
      users: [],
      loading: true,
    };
  }

  if (!data || !data.users) {
    return {
      users: [],
      loading: false,
    };
  }

  const users = data.users.flatMap((user) => {
    if (!user) {
      return [];
    }
    return {
      id: user.id,
      name: user.name,
      birthDate: user.birthDate,
    };
  });

  return {
    users,
    loading: false,
  };
};
