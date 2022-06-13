import { env } from '../env';

function getEnvVars() {
  const appEnv = process.env.APP_ENV || 'development';

  // MEMO: local, productionで値を切り替える場合は、ここを修正
  if (appEnv === 'production') {
    return env;
  } else {
    return env;
  }
}
export const ENV = getEnvVars();
