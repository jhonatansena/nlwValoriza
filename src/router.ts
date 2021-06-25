import { Router } from "express";

import {ensureAdmin} from "./middlewares/ensureAdmin"
import { ensureAuthenticated } from "./middlewares/ensureAuthenticated";

import { CreateUsersControllers } from "./controllers/CreateUsersControllers";
import { CreateTagsControllers } from "./controllers/CreateTagsControllers"
import { AuthenticateUserController } from "./controllers/AuthenticateUserController";
import {CreateComplimentsController} from "./controllers/CreateComplimentsController"

const router = Router();

const createUsersControllers = new CreateUsersControllers();
const createTagsControllers = new CreateTagsControllers();
const authenticateUserController = new AuthenticateUserController();
const createComplimentsController = new CreateComplimentsController();


router.post("/tags", 
    ensureAuthenticated, 
    ensureAdmin,
    createTagsControllers.handle);

router.post("/users", createUsersControllers.handle);
router.post("/login", authenticateUserController.handle)
router.post("/compliments", ensureAuthenticated, createComplimentsController.handle);

export {router};
