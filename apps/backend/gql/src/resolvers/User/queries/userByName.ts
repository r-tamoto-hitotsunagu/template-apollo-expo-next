import { arg, nonNull, queryField, inputObjectType } from 'nexus';

const request = inputObjectType({
  name: 'UserByNameInput',
  definition(t) {
    t.nonNull.string('name', { description: 'ユーザー名' });
  },
});

export const userByName = queryField('userByName', {
  type: 'User',
  description: 'ユーザー名からユーザーデータを取得',
  args: {
    input: nonNull(arg({ type: request })),
  },
  resolve: async (_parent, { input }, context) => {
    const { prisma } = context;
    const { name } = input;

    return await prisma.user.findUnique({
      where: {
        name,
      },
    });
  },
});
