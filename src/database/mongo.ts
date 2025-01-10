import { MongoClient as Mongo, Db, ServerApiVersion } from 'mongodb'

require('dotenv').config();


export const MongoClient = {
    client: undefined as unknown as Mongo,
    db: undefined as unknown as Db,

    async connect(): Promise<void> {
        console.log(process.env.MONGODB_URL);
        const url = process.env.MONGODB_URL!;
        const username = process.env.MONGODB_USERNAME
        const password = process.env.MONGODB_PASSWORD

        const client = new Mongo(url,
            {
                serverApi: {
                    version: ServerApiVersion.v1,
                    strict: true,
                    deprecationErrors: true,
                }
            });
        const db = client.db("users-db")

        this.client = client;
        this.db = db;

        console.log("Connected to mongodb!");

    }
}