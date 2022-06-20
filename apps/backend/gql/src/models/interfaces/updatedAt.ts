import { interfaceType } from 'nexus';

export const updatedAt = interfaceType({
  name: 'UpdatedAt',
  definition(t) {
    t.dateTime('updatedAt', { description: '更新日時' });
  },
});
