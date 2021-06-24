import { Router } from "express";

import { CreateUsersControllers } from "./controllers/CreateUsersControllers";
import { CreateTagsControllers } from "./controllers/CreateTagsControllers"
import {ensureAdmin} from "./middlewares/ensureAdmin"
import { AuthenticateUserController } from "./controllers/AuthenticateUserController";


const router = Router();

const createUsersControllers = new CreateUsersControllers();
const createTagsControllers = new CreateTagsControllers();
const authenticateUserController = new AuthenticateUserController();



router.post("/tags", ensureAdmin, createTagsControllers.handle);
router.post("/users", createUsersControllers.handle);
router.post("/login", authenticateUserController.handle)

export {router};
