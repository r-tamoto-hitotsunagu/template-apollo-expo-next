import { userNavigators } from '$feature/user';

const rootStacks = {
  UserStacks: userNavigators,
};

export type RootStacks = typeof rootStacks;
