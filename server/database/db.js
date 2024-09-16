import { MongoClient } from "mongodb";
import dotenv from 'dotenv'
dotenv.config()

const URL = `mongodb+srv://${process.env.DB_USERNAME}:${process.env.DB_PASSWORD}@crud-app.tknu4.mongodb.net/?retryWrites=true&w=majority&appName=CRUD-APP`;

const client = new MongoClient(URL);

const Connection = async() => {
   
    try {
        //console.log(URL)
        
        await client.connect()
       console.log('Database connected successfully!');
    } 
    catch (error) {
        console.log("Error while connecting with the database", error);
    }
}

export default Connection;