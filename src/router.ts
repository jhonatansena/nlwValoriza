import { Router } from "express";

import {ensureAdmin} from "./middlewares/ensureAdmin"
import { ensureAuthenticated } from "./middlewares/ensureAuthenticated";

import { CreateUsersControllers } from "./controllers/CreateUsersControllers";
import { CreateTagsControllers } from "./controllers/CreateTagsControllers"
import { AuthenticateUserController } from "./controllers/AuthenticateUserController";
import {CreateComplimentsController} from "./controllers/CreateComplimentsController"
import { ListUserRecieverComplimentsController } from "./controllers/ListUserRecieverComplimentsController"
import { ListUserSenderComplimentsController } from "./controllers/ListUserSenderComplimentsController";
import { ListTagsController } from "./controllers/ListTagsController";

const router = Router();

const createUsersControllers = new CreateUsersControllers();
const createTagsControllers = new CreateTagsControllers();
const authenticateUserController = new AuthenticateUserController();
const createComplimentsController = new CreateComplimentsController();
const listUserRecieverComplimentsController = new ListUserRecieverComplimentsController();
const listUserSenderComplimentsController = new ListUserSenderComplimentsController();
const listTagsController = new ListTagsController();

router.post("/tags", 
    ensureAuthenticated, 
    ensureAdmin,
    createTagsControllers.handle);

router.post("/users", createUsersControllers.handle);
router.post("/login", authenticateUserController.handle)
router.post("/compliments", ensureAuthenticated, createComplimentsController.handle);

router.get("/users/compliments/send", 
ensureAuthenticated, 
listUserSenderComplimentsController.handle)

router.get("/users/compliments/receive", 
ensureAuthenticated, 
listUserRecieverComplimentsController.handle)

router.get("/tags", ensureAuthenticated, listTagsController.handle)

export {router};
