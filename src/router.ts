import { Router } from "express";

import { CreateUsersControllers } from "./controllers/CreateUsersControllers";
import { CreateTagsControllers } from "./controllers/CreateTagsControllers"

const router = Router();
const createUsersControllers = new CreateUsersControllers();
const createTagsControllers = new CreateTagsControllers();

router.post("/users", createUsersControllers.handle);

router.post("/tags",createTagsControllers.handle);

export {router};
