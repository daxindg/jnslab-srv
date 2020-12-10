import { MiddlewareFn } from "type-graphql";
import { MyContext } from "../types/MyContext";
import { testEdit } from "../utils/permissions";



export const canEdit: MiddlewareFn<MyContext> = ({context}, next) => {
  if (!testEdit(context.req.session.permission!)) {
    throw new Error("permission denied: connot create");
  }
  return next();
}