import { list, queryField } from 'nexus';

export const users = queryField('users', {
  type: list('User'),
  description: 'Get Multi Users',
  resolve: async (_parent, _input, context) => {
    const { prisma } = context;
    return await prisma.user.findMany();
  },
});
