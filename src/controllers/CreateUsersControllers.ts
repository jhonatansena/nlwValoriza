import {Response, Request} from "express"
import { CreateUserService } from "../services/CreateUserService";

class CreateUsersControllers{

    async handle(request: Request, response: Response){
        const {name, email, admin} = request.body;

        const createUserService = new CreateUserService();

        const user = await createUserService.execute({name, email, admin});

        return response.json(user);


    }

}

export {CreateUsersControllers}