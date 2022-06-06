import 'dotenv/config.js';
import { PrismaClient } from '@prisma/client';
import { __prod__ } from '../constants';
import type { Prisma } from '@prisma/client';
export const getPrismaOption = (): Prisma.PrismaClientOptions => {
  const { PRISMA_LOG_LEVEL } = process.env;

  if (__prod__) {
    return {};
  }

  return {
    log: [PRISMA_LOG_LEVEL],
  };
};

const createPrismaClient = (): PrismaClient => {
  const prisma = new PrismaClient(getPrismaOption());

  // TODO: 後ほど実装

  //! Specify soft deletion models here.
  // prisma.$use(async (params, next) => {
  //   const softDeletionModels = ['Account'];
  //   if (params.model && softDeletionModels.includes(params.model)) {
  //     if (params.action === 'delete') {
  //       params.action = 'update';
  //       params.args.data = { deletedAt: new Date().toISOString() };
  //     }
  //
  //     if (params.action === 'deleteMany') {
  //       params.action = 'updateMany';
  //
  //       if (params.args.data !== undefined) {
  //         params.args.data.deletedAt = new Date().toISOString();
  //       } else {
  //         params.args.data = { deletedAt: new Date().toISOString() };
  //       }
  //     }
  //
  //     if (params.action === 'findUnique') {
  //       params.action = 'findFirst';
  //       if (!params.args) {
  //         params.args = { where: {} };
  //       }
  //
  //       params.args.where.deletedAt = null;
  //     }
  //
  //     if (params.action === 'findMany' || params.action === 'findFirst') {
  //       if (!params.args) {
  //         params.args = { where: {} };
  //       }
  //
  //       if (params.args.where !== undefined) {
  //         if (params.args.where.deletedAt === undefined) {
  //           params.args.where.deletedAt = null;
  //         }
  //       } else {
  //         params.args.where = { deletedAt: null };
  //       }
  //     }
  //   }
  //
  //   return next(params);
  // });

  return prisma;
};

export const prisma = createPrismaClient();
