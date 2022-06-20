import { interfaceType } from 'nexus';

export const createdAt = interfaceType({
  name: 'CreatedAt',
  definition(t) {
    t.dateTime('createdAt', { description: '作成日時' });
  },
});
