import { subscriptionField } from 'nexus';
import { REDIS_KEY } from '@src/constants';
import type { Context } from '@src/context';

export const usersSubscription = subscriptionField('user', {
  type: 'User',
  description: 'Get push User',
  subscribe: (_, _args, ctx: Context) => {
    const { pubsub } = ctx;
    return pubsub.asyncIterator(REDIS_KEY.USERS);
  },
  resolve: (event) => {
    return event;
  },
});
