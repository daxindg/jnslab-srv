import { User } from "../entities/User";
import { FieldError } from "../types/FieldError";
import { UserRegisterInputs } from "../types/UserRegisterInputs";


export const verifyRegisterInput = async ({username, password, email}:UserRegisterInputs) => {
    const errors: FieldError[] = [];


    if (username.length < 1) {
      errors.push({
        field: "username",
        message: "用户名不可为空",
      });
    }
    else if (username.includes("@")) {
      errors.push({
        field: "username",
        message: "用户名不可包含`@`"
      })
    }
    else {
      const user = await User.findOne({where: {username}});
      if (user) errors.push({
        field: "username",
        message: "该用户名已被注册"
      })
    }

    if (email.length < 1) {
      errors.push({
        field: "email",
        message: "邮箱不可为空",
      });
    }
    else if (!email.includes("@")) {
      errors.push({
        field: "email",
        message: "邮箱不合法"
      })
    }
    else {
      const user = await User.findOne({where: {email}});
      if (user) errors.push({
        field: "email",
        message: "该邮箱已被注册"
      })
    }

    if (password.length < 8) {
      errors.push({
        field: 'password',
        message: "密码长度须大于8"
      });
    }

    return errors;
}