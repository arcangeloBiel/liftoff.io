import { getCustomRepository } from "typeorm";
import { TagsRepositories } from "../repositories/TagsRepositories"

class ListTagsService {

    async execute() {
        const tagsRepositories = getCustomRepository(TagsRepositories);
        //retorna todas as tags
        const tags = await tagsRepositories.find();

        return tags;
    }

}

export  {ListTagsService}