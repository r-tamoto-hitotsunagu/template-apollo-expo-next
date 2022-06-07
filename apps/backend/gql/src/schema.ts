// api/schema.ts
import { join } from 'path';
import { makeSchema } from 'nexus';
import * as models from './models';
import * as resolvers from './resolvers';

export const schema = makeSchema({
  types: [models, resolvers],
  outputs: {
    typegen: join(__dirname, './generated/nexus-typegen.ts'),
    schema: join(__dirname, './generated/schema.graphql'),
  },
  features: {
    abstractTypeStrategies: {
      resolveType: false,
    },
  },
});
