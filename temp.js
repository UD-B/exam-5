import { getAllUsers } from "../dal/registerD.js"




export async function getAllUsers() {
    const allUsers = await collection.find().toArray()
    return allUsers
}