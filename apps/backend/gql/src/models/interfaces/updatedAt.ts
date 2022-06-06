import { interfaceType } from 'nexus';

export const updatedAt = interfaceType({
  name: 'UpdatedAt',
  definition(t) {
    t.dateTime('updatedAt', { description: 'Time updated' });
  },
});
