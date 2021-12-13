import { UsersRepositories } from "../repositories/UsersRepositories";
import { getCustomRepository } from "typeorm";

interface IRequest {
    name: string;
    email: string;
    admin?: boolean
}

class CreateUserService {

    async execute({name, email, admin} : IRequest) {

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

        const user = usersRepositories.create({
            name,
            email,
            admin
        });

        await usersRepositories.save(user);
        return user;

    }
    

}

export { CreateUserService } 