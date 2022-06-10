import { server, httpServer, app } from './server';
import 'dotenv/config.js';

export const main = async (port: number) => {
  await server.start();
  server.applyMiddleware({ app });

  return new Promise((resolve, reject) => {
    httpServer.listen(port).once('listening', resolve).once('error', reject);
  });
};

main(process.env.SERVER_PORT).then(() => {
  console.log(
    `🚀 Server ready at http://localhost:${process.env.SERVER_PORT}${server.graphqlPath}`
  );
});
