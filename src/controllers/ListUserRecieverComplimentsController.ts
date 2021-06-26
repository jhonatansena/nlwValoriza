import { Response, Request } from 'express';
import { ListUserReceiverComplimentsService } from '../services/ListUserReceiverComplimentsService';

class ListUserRecieverComplimentsController{
    async handle(request: Request, response: Response){

        const { user_id } = request;

        const listUserRecieverComplimentsService = new ListUserReceiverComplimentsService();

        const compliments = await listUserRecieverComplimentsService.execute(
            user_id
        );

        return response.json(compliments);

    }
}

export {ListUserRecieverComplimentsController}