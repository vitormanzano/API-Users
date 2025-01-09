import express from 'express';
import { GetUsersControllers } from './controllers/get-users/get-users';
import { MongoGetUsersRepository } from './repositories/get-users/mongo-get-users';
import { MongoClient } from './database/mongo';

const main = async () => {
    const app = express();
    await MongoClient.connect();

    app.get("/users", async  (req, res) => {
        const mongoGetUsersRepository = new MongoGetUsersRepository();
    
        const getUsersControllers =  new GetUsersControllers(mongoGetUsersRepository);
    
        const response = await getUsersControllers.handle();
    
        res.send(response.body).status(response.statusCode);
    });
    
    const port = process.env.PORT;

    app.listen(port, () => console.log('Listening on port ' + port));
}

main();
