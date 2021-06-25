import { Request, Response, NextFunction, request, response} from "express";
import { verify } from "jsonwebtoken";

export function ensureAuthenticated(
    request: Request,
    response: Response,
    next: NextFunction
){
    const authToken = request.headers.authorization;

    const [,token] = authToken.split(" ");
    console.log(token)

    try {

        const { sub } = verify(token, "0f4182ac6d770e36cb3f98425e46fee8");

        request.user_id = sub.toString();

        return next();
    } catch (err) {
        return response.status(401).end();
    }

    

    if(!authToken){
        return response.status(401).end();
    }

}