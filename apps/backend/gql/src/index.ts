import http from 'http';
import express from 'express';
import { server } from './server';
// eslint-disable-next-line @typescript-eslint/no-var-requires
require('dotenv').config();
export const main = async (port: number) => {
  const app = express();
  await server.start();
  server.applyMiddleware({ app });

  const httpServer = http.createServer(app);
  return new Promise((resolve, reject) => {
    httpServer.listen(port).once('listening', resolve).once('error', reject);
  });
};

main(process.env.SERVER_PORT).then(() => {
  console.log(
    `🚀 Server ready at http://localhost:${process.env.SERVER_PORT}${server.graphqlPath}`
  );
});
