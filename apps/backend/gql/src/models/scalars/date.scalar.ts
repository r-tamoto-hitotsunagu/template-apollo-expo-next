import { GraphQLDate } from 'graphql-scalars';
import { asNexusMethod } from 'nexus';
export const dateScalar = asNexusMethod(GraphQLDate, 'date');
