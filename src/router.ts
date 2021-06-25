import { Router } from "express";

import { CreateUsersControllers } from "./controllers/CreateUsersControllers";
import { CreateTagsControllers } from "./controllers/CreateTagsControllers"
import {ensureAdmin} from "./middlewares/ensureAdmin"
import { AuthenticateUserController } from "./controllers/AuthenticateUserController";
import {CreateComplimentsController} from "./controllers/CreateComplimentsController"

const router = Router();

const createUsersControllers = new CreateUsersControllers();
const createTagsControllers = new CreateTagsControllers();
const authenticateUserController = new AuthenticateUserController();
const createComplimentsController = new CreateComplimentsController();


router.post("/tags", ensureAdmin, createTagsControllers.handle);
router.post("/users", createUsersControllers.handle);
router.post("/login", authenticateUserController.handle)
router.post("/compliments", ensureAdmin, createComplimentsController.handle);

export {router};
