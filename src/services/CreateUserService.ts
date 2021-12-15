import { UsersRepositories } from "../repositories/UsersRepositories";
import { getCustomRepository } from "typeorm";
import {hash} from "bcryptjs";

interface IRequest {
    name: string;
    email: string;
    admin?: boolean, 
    password?: string;
}

class CreateUserService {

    async execute({name, email, admin, password} : IRequest) {

        const usersRepositories = getCustomRepository(UsersRepositories);
         
        if(!email) {
            throw new Error("Email incorreto");
        }
        //verifica se já existe o email cadastrado
        const userAlreadyExists = await usersRepositories.findOne({
            email
        });

        if(userAlreadyExists) {
         throw new Error(`User ${name} already exists`);
        }

        const passwordHash = await hash(password, 8);

        const user = usersRepositories.create({
            name,
            email,
            admin,
            password: passwordHash
        });

        await usersRepositories.save(user);
        return user;

    }
    

}

export { CreateUserService } 