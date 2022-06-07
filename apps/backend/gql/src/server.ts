import { ApolloServer } from 'apollo-server-express';
import { __prod__ } from './constants';
import { schema } from './schema';
import { prisma } from './utils/prisma.util';

export const server = new ApolloServer({
  schema,
  introspection: !__prod__,
  debug: !__prod__,
  context: {
    prisma,
  },
});
