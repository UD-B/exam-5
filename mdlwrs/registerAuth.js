import {db} from "../dal/registerD.js"

export const collection = db.collection("users_collection")


export async function registerAuth(req, res, next) {
    if (!req.body) {
        return res.status(401).send("body not sent")
    }
    const { username, password } = req.body
    if (!username || !password) {
        return res.status(401).send("report must include all credential fields")
    }
    if (typeof (username) !== 'string') {
        return res.status(401).send("username must be a string")
    }
    const userTaken = await collection.findOne({ "username": username })
    if (userTaken) {
        return res.status(401).send("username is already taken")
    }
    if (typeof (password) !== 'string') {
        return res.status(401).send("password must be a string")
    }
    next()
}