import { getCustomRepository } from "typeorm";
import { TagsRepositories } from "../repositories/TagsRepositories";

interface IRequest {
    name: string;
   
}

class CreateTagService {

    async execute({name} : IRequest) {

        const tagsRepositories = getCustomRepository(TagsRepositories);
         
        if(!name) {
            throw new Error("Nome da tag incorreto");
        }
        //verifica se já tag cadastrado
        const tagAlreadyExists = await tagsRepositories.findOne({
            name
        });

        if(tagAlreadyExists) {
         throw new Error(`Tag ${name} already exists`);
        }

        const tag = tagsRepositories.create({
            name
        });

        await tagsRepositories.save(tag);
        return tag;

    }
    

}

export { CreateTagService } 