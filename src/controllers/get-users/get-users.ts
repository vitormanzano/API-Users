import { User } from "../../models/user";
import { ok, serverError, serverErrorString } from "../helpers";
import { HttpResponse, IController } from "../protocols";
import { IGetUsersRepository } from "./protocols";

export class GetUsersControllers implements IController {

    constructor(private readonly getUsersRepository: IGetUsersRepository) {}
        
    async handle(): Promise<HttpResponse<User[] | string>> {
        try {
            const users = await this.getUsersRepository.getUsers();
            console.log("AQUI");
            return ok<User[]>(users);
        }

        catch (ex) {

            const message = (ex as Error).message;
            console.log(message);
            return serverErrorString(message);
        }
    }
}