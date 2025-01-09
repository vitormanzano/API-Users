import { IGetUsersRepository } from "../../controllers/get-users/protocols";
import { MongoClient } from "../../database/mongo";
import { User } from "../../models/user";

export class MongoGetUsersRepository implements IGetUsersRepository {
    async getUsers(): Promise<User[]> {
        const users = await MongoClient.db.
        collection<Omit<User, "id"> >('users').    //Meio que remove a propriedade da interface o Omit
        find({}).
        toArray();

        return users.map(({_id, ...rest}) => ({
            ...rest, 
            id: _id.toHexString()}) );
    }
}