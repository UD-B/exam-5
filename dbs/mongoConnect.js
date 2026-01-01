import { Db, MongoClient } from 'mongodb'
import 'dotenv/config'

let db
const client = new MongoClient(process.env.dataBase)

/**
 * 
 * @returns {Promise<Db>}
*/
export async function dbConnection() {
    try {
        if (!db) {
            await client.connect();
            // db = client.db("fasting_exe")
            console.log("db connected")
        }
        return db
    } catch (error) {
        console.log(error.message)
    }
}

export default dbConnection