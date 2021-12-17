import {Router } from "express";
import { AuthenticateUserController } from "./controllers/AuthenticateUserController";
import { CreateComplimentController } from "./controllers/CreateComplimentController";
import { CreateTagController } from "./controllers/CreateTagController";
import { CreateUserController } from "./controllers/CreateUserController";
import { ensureAdmin } from "./middlewares/ensureAdmin";

const router = Router();

const createUserController = new CreateUserController();
const createTagController = new CreateTagController();
const authenticateUserController = new AuthenticateUserController();
const createComplimentController = new CreateComplimentController();

router.post("/api/users", ensureAdmin, createUserController.handle);
router.post("/api/tags", createTagController.handle);
router.post("/api/login", authenticateUserController.handle);
router.post("/api/compliments", createComplimentController.handle)


export {router}