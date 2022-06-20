import { arg, inputObjectType, nonNull, queryField } from 'nexus';

const request = inputObjectType({
  name: 'UserByIdInput',
  definition(t) {
    t.nonNull.string('id', { description: 'ユーザーID' });
  },
});

export const userById = queryField('userById', {
  type: 'User',
  description: 'ユーザーIDからユーザーデータを取得',
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
