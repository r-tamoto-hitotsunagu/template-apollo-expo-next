import { GraphQLEmailAddress } from 'graphql-scalars';
import { asNexusMethod } from 'nexus';
export const emailScalar = asNexusMethod(GraphQLEmailAddress, 'email');
