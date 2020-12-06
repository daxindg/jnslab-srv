declare namespace NodeJS {
  export interface ProcessEnv {
    DB_URL: string;
    REDIS_SECRET: string;
    CORS_URL: string;
    PORT: string;
    NODE_ENV: string;
  }
}
