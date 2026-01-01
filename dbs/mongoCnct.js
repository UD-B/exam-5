import { Db, MongoClient } from 'mongodb'
import 'dotenv/config'

let db
const client = new MongoClient(process.env.mongoUrl)

/**
 * 
 * @returns {Promise<Db>}
*/
export async function mongo() {
    try {
        if (!db) {
            await client.connect();
            db = client.db("test_5")
            console.log("db connected")
        }
        return db
    } catch (error) {
        console.log(error.message)
    }
}

export default mongo