import { registerUser } from "../dal/registerD.js";
import { collection } from "../mdlwrs/registerAuth.js";


export async function registerUserController(req, res) {
    const { username, password } = req.body
    const encMsgCnt = 0
    const timestamp = Date.now()
    const date = new Date(timestamp)
    const stringDate = date.toString()
    const result = await registerUser(username, password, encMsgCnt, stringDate)
    const user = await collection.findOne(result._id)
    const userId = user._id
    res.status(201).send({"id": userId , "username": username})
}