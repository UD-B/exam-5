import mongo from "../dbs/mongoCnct.js"


export const db = await mongo()
const collection = db.collection("users_collection")


export async function registerUser(username, password, encMsgCnt, createdAt) {
    const register = await collection.insertOne({
        "username": username,
        "password": password,
        "encryptedMessagesCount": encMsgCnt,
        "createdAt": createdAt
    })
    return register
}