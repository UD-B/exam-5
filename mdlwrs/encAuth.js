import {db} from "../dal/registerD.js"


export const collection = db.collection("users_collection")


export async function encAuth(req, res, next) {
    const { message, cipherType } = req.body
    if (!req.body) {
        return res.status(401).send("body not sent")
    }
    if (!message || !cipherType) {
        return res.status(401).send("report must include all credential fields")
    }
    if (typeof (message) !== 'string') {
        return res.status(401).send("message must be a string")
    }
    if (typeof (cipherType) !== 'string') {
        return res.status(401).send("cipherType must be a string")
    }
    const { username, password } = req.body

    if (!username || !password) {
        return res.status(401).send("report must include all credential fields")
    }
    if (typeof (username) !== 'string') {
        return res.status(401).send("username must be a string")
    }
    const user = await collection.findOne({ "username": username })

    if (!user) {
        return res.status(401).send("no such username")
    }
    if (typeof (password) !== 'string') {
        return res.status(401).send("password must be a string")
    }
    const userPassword = await user.password

    if (userPassword !== password) {
        return res.status(401).send("wrong password")
    }
    next()
}