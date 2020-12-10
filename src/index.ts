import { ApolloServer } from 'apollo-server-express';
import connectRedis from 'connect-redis';
import dotenv from 'dotenv-safe';
import express from 'express';
import session, { SessionOptions } from 'express-session';
import Redis from 'ioredis';
import path from 'path';
import 'reflect-metadata';
import { buildSchema } from 'type-graphql';
import { createConnection } from 'typeorm';
import { __prod__ } from "./constants";
import { Article } from './entities/Article';
import { Borrow } from './entities/Borrow';
import { Journal } from './entities/Journal';
import { Issue } from './entities/Issue';
import { User } from './entities/User';
import { JournalResolver } from "./resolvers/journal";
import { UserResolver } from './resolvers/user';
import { MyContext } from './types/MyContext';
import { IssueResolver } from './resolvers/issue';


const main = async ()=> {
  dotenv.config();
  const conn = await createConnection({
    type: "postgres",
    url: process.env.DATABASE_URL,
    migrations: [path.join(__dirname, "./migrations/*")],
    entities: [User, Journal, Article, Issue, Borrow],
    synchronize: true,
    logging: !__prod__
  });

  await conn.runMigrations();

  const app = express();
  app.set("trust proxy", true);
  
  const RedisStore = connectRedis(session);
  const redis = new Redis(process.env.REDIS_URL);

  const sessionOption:SessionOptions = {
    name: 'sid',
    store: new RedisStore({ 
      client: redis,
      disableTouch: true,
      disableTTL: true
    }),
    cookie: {
      path:"/",
      maxAge: 1000 * 3600* 24,
      httpOnly: true,
      sameSite: "lax",
      secure: __prod__,
    },
    saveUninitialized: false,
    secret: process.env.SESSION_SECRET,
    resave: false,
  };

  // console.log(sessionOption);

  app.use(
    session(sessionOption)
  );

  const apolloServer = new ApolloServer({
    schema: await buildSchema({
      resolvers:[JournalResolver, UserResolver, IssueResolver],
      validate: false
    }),
    context: ({req, res}):MyContext => ({req, res, redis }),
  });

  const allowedOrigins = [process.env.CORS_URL, "http://localhost:3000"];
  // console.log(allowedOrigins);

  apolloServer.applyMiddleware({app, cors: {origin: allowedOrigins, credentials: true}});

  app.listen(parseInt(process.env.PORT), () => {
    console.log(`server started on localhost:${process.env.PORT}`);
  })
}

main();
