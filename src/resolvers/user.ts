import { User } from "../entities/User";
import { MyContext } from "../types/MyContext";
import { Arg, Ctx, Mutation, Query, Resolver, UseMiddleware } from "type-graphql";
import argon2 from "argon2";
import { UserResponse } from "../types/UserResponse";
import { UserRegisterInputs } from "../types/UserRegisterInputs";
import { verifyRegisterInput } from "../utils/verifyRegisterInput";
import { v4 } from "uuid";
import { sendEmail } from "../utils/sendEmail";
import { RESET_PASSWORD_PREFIX } from "../constants";
import { isLogedin } from "../middleware/isLogedin";

declare module "express-session" {
  interface Session {
    userId?: number;
    permission?: number;
  }
}

@Resolver()
export class UserResolver {



  @Query(() => User, { nullable: true })
  async me(@Ctx() { req }: MyContext) {
    if (!req.session.userId) return null;
    return User.findOne(req.session.userId);
  }

  @UseMiddleware([isLogedin])
  @Mutation(() => Boolean)
  async setPermission(
    @Arg('permission') permission: number,
    @Ctx() { req }: MyContext
  ) {
    const user = await User.findOne(req.session.userId);
    if (user) {
      user.permission = permission;
      await User.save(user);
      return true;
    }
    return false;
  }


  @Mutation(() => UserResponse)
  async register(
    @Arg("options") options: UserRegisterInputs,
    @Ctx() { req }: MyContext
  ): Promise<UserResponse> {
    const errors = await verifyRegisterInput(options);
    if (errors.length > 0) return { errors };

    const hash = await argon2.hash(options.password);
    const user = await User.create({
      ...options,
      password: hash,
    }).save();

    req.session.userId = user.id;
    return { user };
  }


  @Mutation(() => UserResponse)
  async login(
    @Arg("usernameOrEmail") usernameOrEmail: string,
    @Arg("password") password: string,
    @Ctx() { req }: MyContext
  ): Promise<UserResponse> {
    const user = await User.findOne({
      where: usernameOrEmail.includes("@")
        ? { email: usernameOrEmail }
        : { username: usernameOrEmail },
    });
    if (!user) {
      return {
        errors: [{ field: "usernameOrEmail", message: `用户不存在` }],
      };
    }
    if (!(await argon2.verify(user.password, password))) {
      return { errors: [{ field: "password", message: "密码错误" }] };
    }

    req.session.userId = user.id;
    req.session.permission = user.permission;

    return { user: user };
  }

  @Mutation(() => Boolean)
  async logout(@Ctx() { req, res }: MyContext): Promise<Boolean> {
    return new Promise((resolve) => {
      req.session.destroy((err) => {
        res.clearCookie("sid");
        if (err) {
          resolve(false);
        } else resolve(true);
      });
    });
  }

  @Mutation(() => Boolean)
  async forgotPassword(
    @Arg("email") email: string,
    @Ctx() { redis }: MyContext
  ) {
    if (!email.includes("@")) {
      return false;
    }
    const user = await User.findOne( { where: {email} });
    if (!user) return true;

    const token = v4();
    await redis.set(
      RESET_PASSWORD_PREFIX + token,
      user.id,
      "ex",
      1000 * 60 * 15
    );
    await sendEmail(
      email,
      `<a href="http://localhost:3000/reset-password/${token}">重置密码</a>`
    );
    return true;
  }

  @Mutation(() => UserResponse)
  async resetPassword(
    @Arg("token") token: string,
    @Arg("password") password: string,
    @Ctx() { redis }: MyContext
  ): Promise<UserResponse> {
    if (password.length < 8) {
      return {
        errors: [
          {
            field: "password",
            message: "密码长度须大于8",
          },
        ],
      };
    }
    const key = RESET_PASSWORD_PREFIX + token;
    const userId = await redis.get(key);
    if (!userId) {
      return {
        errors: [
          {
            field: "token",
            message: "expired",
          },
        ],
      };
    }
    const id = parseInt(userId);
    const user = await User.findOne(id);
    if (!user)
      return {
        errors: [
          {
            field: "unknown",
            message: "god bless",
          },
        ],
      };
    user.password = await argon2.hash(password);
    await User.save(user);
    await redis.del(key);

    return { user };
  }
}
