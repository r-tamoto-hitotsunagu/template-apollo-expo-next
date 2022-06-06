import { interfaceType } from 'nexus';

export const deletedAt = interfaceType({
  name: 'DeletedAt',
  definition(t) {
    t.dateTime('deletedAt', { description: 'Time deleted' });
  },
});
