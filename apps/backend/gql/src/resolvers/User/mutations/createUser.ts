import { arg, mutationField, nonNull, inputObjectType } from 'nexus';
import { UserModel } from '@src/generated/zod';
import { isZodError, ErrorUserRequest } from '@src/utils/errors.util';
import { autoId } from '@src/utils/id.util';

const request = inputObjectType({
  name: 'CreateUserInput',
  definition(t) {
    t.nonNull.string('name');
    t.date('birthDate');
  },
});

export const createUser = mutationField('createUser', {
  type: 'User',
  description: 'Creat user',
  args: {
    input: nonNull(arg({ type: request })),
  },
  resolve: async (_parent, { input }, context) => {
    const { birthDate, name } = input;
    const { prisma } = context;

    try {
      UserModel.pick({ birthDate: true, name: true }).parse({
        birthDate,
        name,
      });
    } catch (e: any) {
      if (isZodError(e)) {
        throw ErrorUserRequest(e.message);
      }
    }

    return await prisma.user.create({
      data: {
        id: autoId(),
        name,
        birthDate,
      },
    });
  },
});
