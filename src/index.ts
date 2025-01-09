import express from 'express';
import { GetUsersControllers } from './controllers/get-users/get-users';
import { MongoGetUsersRepository } from './repositories/get-users/mongo-get-users';
import { MongoClient } from './database/mongo';
import { MongoCreateUserRepository } from './repositories/create-user/mongo-create-user';
import { CreateUserController } from './controllers/create-user/create-user';
import { MongoUpdateUserRepository } from './repositories/update-user/mongo-update-user';
import { UpdateUserController } from './controllers/update-user/update-user';
import { MongoDeleteuserRepository } from './repositories/delete-user/mongo-delete-user';
import { DeleteUserController } from './controllers/delete-user/delete-user';

const main = async () => {
    const app = express();
    await MongoClient.connect();

    app.use(express.json());

    app.get("/", (req, res) => {
        res.send("Aplicação rodando!");
    })

    app.get("/users", async  (req, res) => {
        const mongoGetUsersRepository = new MongoGetUsersRepository();
    
        const getUsersControllers =  new GetUsersControllers(mongoGetUsersRepository);
    
        const response = await getUsersControllers.handle();
    
        res.send(response.body).status(response.statusCode);
    });

    app.post('/users', async (req, res) => {
        const mongoCreateUserRepository = new MongoCreateUserRepository();

        const createUserController = new CreateUserController(mongoCreateUserRepository);

        const response = await createUserController.handle({body: req.body});

        res.send(response.body).status(response.statusCode);
    });

    app.patch('/users/:id', async (req, res) => {
        const mongoUpdateUserRepository = new MongoUpdateUserRepository();

        const updateUserController = new UpdateUserController(mongoUpdateUserRepository);

        const response = await updateUserController.handle({
            body: req.body,
            params: req.params
        });
        res.send(response.body).status(response.statusCode);
    });

    app.delete('/users/:id', async (req, res) => {
        const mongoDeleteUserRepository = new MongoDeleteuserRepository();

        const deleteUserController = new DeleteUserController(mongoDeleteUserRepository);

        const response = await deleteUserController.handle({
            params: req.params
        });
        res.send(response.body).status(response.statusCode);
    });
    
    
    const port = process.env.PORT;

    app.listen(port, () => console.log('Listening on port ' + port));
}

main();
