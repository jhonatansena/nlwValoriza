import { Router } from "express";

import { CreateUsersControllers } from "./controllers/CreateUsersControllers";
import { CreateTagsControllers } from "./controllers/CreateTagsControllers"
import {ensureAdmin} from "./middlewares/ensureAdmin"


const router = Router();

const createUsersControllers = new CreateUsersControllers();
const createTagsControllers = new CreateTagsControllers();


router.post("/tags", ensureAdmin, createTagsControllers.handle);
router.post("/users", createUsersControllers.handle);


export {router};
