import { PubSub } from 'graphql-subscriptions';
import { prisma } from './utils/prisma.util';
import type { PrismaClient } from '@prisma/client';

export interface Context {
  prisma: PrismaClient;
  // TODO: graphql-subscriptionsのPubSubは単一サーバーの為、推奨されていない。正式版ではRedisを活用する [NOTE] https://www.apollographql.com/docs/apollo-server/data/subscriptions/#the-pubsub-class
  // TODO: hackTalkの server/src/context.ts を参照
  pubsub: PubSub;
}

const pubsub = new PubSub();

export const createContext = (): Context => {
  return {
    prisma,
    pubsub,
  };
};
