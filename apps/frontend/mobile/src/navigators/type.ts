// TODO: aliasからimport
import { userNavigators } from '../features/user';

const rootStacks = {
  UserStacks: userNavigators,
};

export type RootStacks = typeof rootStacks;
