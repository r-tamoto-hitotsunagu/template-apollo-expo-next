import { subscriptionField } from 'nexus';
import { REDIS_KEY } from '@src/constants';
import type { Context } from '@src/context';
import type { NexusGenObjects } from '@src/generated/nexus-typegen';

export const addedUser = subscriptionField('addedUser', {
  type: 'User',
  description: 'Get push User',
  subscribe: (_, _args, ctx: Context) => {
    const { pubsub } = ctx;
    return pubsub.asyncIterator(REDIS_KEY.USERS);
  },
  resolve: (event: NexusGenObjects['User']) => {
    return event;
  },
});
