import { MiddlewareFn } from "type-graphql";
import { MyContext } from "../types/MyContext";



export const isLogedin: MiddlewareFn<MyContext> = ({context}, next) => {
  if (!context.req.session.userId) {
    throw new Error("请登录");
  }
  return next();
}