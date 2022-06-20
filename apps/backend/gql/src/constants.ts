import 'dotenv/config.js';

/**
 * Environment
 */
export const __prod__ = process.env.NODE_ENV === 'production';
export const __test__ = process.env.NODE_ENV === 'test';

/**
 * Redis
 */
export const REDIS_KEY = {
  USERS: 'users',
  USER: 'user',
} as const;

export type RedisKey = typeof REDIS_KEY[keyof typeof REDIS_KEY];
export const AllRedisKey = Object.values(REDIS_KEY);
