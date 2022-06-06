import { ApolloError } from 'apollo-server-core';
import { z } from 'zod';

export const isZodError = (e: unknown): boolean => {
  return e instanceof z.ZodError;
};

export const ErrorUserRequest = (message: string): ApolloError =>
  new ApolloError(message, 'BAD_USER_INPUT', {
    parameter: 'verified',
  });
