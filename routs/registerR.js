import express from 'express'
import { registerUserController } from '../cntrls/registerC.js'
import { registerAuth } from '../mdlwrs/registerAuth.js'

const router = express.Router()

router.post("/register", registerAuth, registerUserController)

export default router