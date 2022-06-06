import { GraphQLDateTime } from 'graphql-scalars';
import { asNexusMethod } from 'nexus';
export const dateTimeScalar = asNexusMethod(GraphQLDateTime, 'dateTime');
