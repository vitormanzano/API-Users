import { IController } from "../protocols";
import { IGetUsersRepository } from "./protocols";

export class GetUsersControllers implements IController {

    constructor(private readonly getUsersRepository: IGetUsersRepository) {}
        
    

    async handle() {
        try {
            const users = await this.getUsersRepository.getUsers();

            return {
                statusCode: 200,
                body: users
            } 
        }

        catch (error) {
            return {
                statusCode: 500,
                body: 'Something went wrong'
            }
        }
    }
}