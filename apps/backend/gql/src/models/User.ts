import { objectType } from 'nexus';
import { node, createdAt, updatedAt } from './interfaces';

export const User = objectType({
  name: 'User',
  definition(t) {
    t.implements(node);
    t.string('name');
    t.date('birthDate');
    t.implements(createdAt);
    t.implements(updatedAt);
  },
});
