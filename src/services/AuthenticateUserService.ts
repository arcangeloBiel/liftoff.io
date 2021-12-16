import { getCustomRepository } from "typeorm";
import { compare } from "bcryptjs";
import { sign } from "jsonwebtoken";
import { UsersRepositories } from "../repositories/UsersRepositories";

interface IAuthenticateRequest {
  email: string;
  password: string;
}

class AuthenticateUserService {
  async execute({ email, password }: IAuthenticateRequest) {
    const usersRepositories = getCustomRepository(UsersRepositories);

    //verificar se email existe
    const user = await usersRepositories.findOne({ email });
    if (!user) {
      throw new Error("Email/Passoword incorrect");
    }

    //verificar se a senha está correta
    const passwordMatch = await compare(password, user.password);

    if (!passwordMatch) {
      throw new Error("Email/Passoword incorrect");
    }

    //Gerar o token

    const token = sign({ email: user.email }, 
        "66b0a9730448da75f1385abf6f39593d"
        , {
            subject: user.id,
            expiresIn: "1d"
        });
        return token;
  }
}

export { AuthenticateUserService };
