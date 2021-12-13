import {Router } from "express";
import { CreateTagController } from "./controllers/CreateTagcontroller";
import { CreateUserController } from "./controllers/CreateUserController";

const router = Router();

const createUserController = new CreateUserController();
router.post("/api/users", createUserController.handle);

const createTagController = new CreateTagController();
router.post("/api/tags", createTagController.handle);


export {router}