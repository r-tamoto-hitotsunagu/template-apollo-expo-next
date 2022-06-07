import { GraphQLURL } from 'graphql-scalars';
import { asNexusMethod } from 'nexus';
export const urlScalar = asNexusMethod(GraphQLURL, 'url');
