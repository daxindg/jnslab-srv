declare namespace NodeJS {
  export interface ProcessEnv {
    DATABASE_URL: string;
    SESSION_SECRET: string;
    REDIS_URL: string;
    CORS_URL: string;
    PORT: string;
    NODE_ENV: string;
  }
}
