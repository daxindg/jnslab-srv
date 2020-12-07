import 'reflect-metadata';

import dotenv from 'dotenv-safe';
import { __prod__ } from "./constants";
import express from 'express';
import { ApolloServer } from 'apollo-server-express';
import {buildSchema} from 'type-graphql';
import { HelloResolver } from "./resolvers/hello";
import { CatalogResolver } from "./resolvers/catalog";
import { UserResolver } from './resolvers/user';
import Redis from 'ioredis';
import session from 'express-session';
import connectRedis from 'connect-redis';
import { MyContext } from './types/MyContext';
import {createConnection} from 'typeorm';
import { Catalog } from './entities/Catalog';
import { User } from './entities/User';
import { Artical } from './entities/Article';
import { Journal } from './entities/Journal';
import { Borrow } from './entities/Borrow';
import path from 'path';

const main = async ()=> {
  dotenv.config();
  const conn = await createConnection({
    type: "postgres",
    url: process.env.DATABASE_URL,
    migrations: [path.join(__dirname, "./migrations/*")],
    entities: [User, Catalog, Artical, Journal, Borrow],
    synchronize: true,
    logging: !__prod__
  });

  await conn.runMigrations();

  const app = express();
  app.set("trust proxy", 1);
  
  const RedisStore = connectRedis(session);
  const redis = new Redis(process.env.REDIS_URL);


  app.use(
    session({
      name: 'sid',
      store: new RedisStore({ 
        client: redis,
        disableTouch: true,
        disableTTL: true
      }),
      cookie: {
        maxAge: 1000 * 3600* 24,
        httpOnly: true,
        sameSite: "lax",
        secure: __prod__,
      },
      saveUninitialized: false,
      secret: process.env.SESSION_SECRET,
      resave: false,
    })
  )

  const apolloServer = new ApolloServer({
    schema: await buildSchema({
      resolvers:[HelloResolver, CatalogResolver, UserResolver],
      validate: false
    }),
    context: ({req, res}):MyContext => ({req, res, redis }),
  });
  
  apolloServer.applyMiddleware({app, cors: {origin: [process.env.CORS_URL, "http://localhost:3000"], credentials: true}});

  app.listen(parseInt(process.env.PORT), () => {
    console.log(`server started on localhost:${process.env.PORT}`);
  })
}

main();
