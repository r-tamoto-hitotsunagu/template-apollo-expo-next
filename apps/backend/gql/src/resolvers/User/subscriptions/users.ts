import { list, subscriptionField } from 'nexus';

export const usersSubscription = subscriptionField('users', {
  type: list('User'),
  description: 'Get Multi Users',
  subscribe: async (_, _input, context) => {
    const { prisma } = context;
    return await prisma.user.findMany();
  },
  resolve(eventData) {
    return eventData;
  },
});
