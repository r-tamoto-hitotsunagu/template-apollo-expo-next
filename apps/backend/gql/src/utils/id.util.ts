import { ulid } from 'ulid';

export const autoId = (): string => {
  return ulid();
};
