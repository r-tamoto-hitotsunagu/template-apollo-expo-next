declare namespace NodeJS {
  interface ProcessEnv {
    readonly NODE_ENV: 'production' | 'staging' | 'development' | 'local';
    readonly SERVER_PORT: number;
    readonly DATABASE_URL: string;
    readonly PRISMA_LOG_LEVEL: 'info' | 'query' | 'warn' | 'error';
  }
}
