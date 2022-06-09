import { arg, mutationField, nonNull, inputObjectType } from 'nexus';
import { REDIS_KEY } from '@src/constants';
import type { Context } from '@src/context';
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
  resolve: async (_parent, { input }, ctx: Context) => {
    const { birthDate, name } = input;
    const { prisma, pubsub } = ctx;

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

    const newUser = await prisma.user.create({
      data: {
        id: autoId(),
        name,
        birthDate,
      },
    });

    pubsub.publish(REDIS_KEY.USERS, newUser);
    return newUser;
  },
});
