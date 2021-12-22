import { ListUsersService } from "../services/ListUsersService";
import { Request, Response } from "express";

class ListUserController {

    async handle(req: Request, res: Response) {
        const listUsersService = new ListUsersService();
        const user = await listUsersService.execute();
         return res.json(user);
    }

}

export {ListUserController}