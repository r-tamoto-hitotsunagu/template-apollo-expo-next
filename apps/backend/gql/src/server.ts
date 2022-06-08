import http from 'http';
import { ApolloServerPluginDrainHttpServer } from 'apollo-server-core';
import { ApolloServer } from 'apollo-server-express';
import express from 'express';
import { useServer } from 'graphql-ws/lib/use/ws';
import { WebSocketServer } from 'ws';
import { __prod__ } from './constants';
import { createContext } from './context';
import { schema } from './schema';
export const app = express();
export const httpServer = http.createServer(app);

const weServer = new WebSocketServer({
  server: httpServer,
  path: '/graphql',
});

// eslint-disable-next-line react-hooks/rules-of-hooks
const serverCleanup = useServer(
  {
    schema,
    context: createContext,
  },
  weServer
);

export const server = new ApolloServer({
  schema,
  csrfPrevention: true,
  introspection: !__prod__,
  debug: !__prod__,
  context: createContext,
  plugins: [
    // Proper shutdown for the WebSocket server.
    ApolloServerPluginDrainHttpServer({ httpServer }),
    {
      async serverWillStart() {
        return {
          async drainServer() {
            await serverCleanup.dispose();
          },
        };
      },
    },
  ],
});
