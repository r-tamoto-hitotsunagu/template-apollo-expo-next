import { arg, inputObjectType, nonNull, queryField } from 'nexus';

const request = inputObjectType({
  name: 'UserByIdInput',
  definition(t) {
    t.nonNull.string('id');
  },
});

export const userById = queryField('userById', {
  type: 'User',
  description: 'Get User from id',
  args: {
    input: nonNull(arg({ type: request })),
  },
  resolve: async (_parent, { input }, context) => {
    const { prisma } = context;
    const { id } = input;

    return await prisma.user.findUnique({
      where: {
        id,
      },
    });
  },
});
