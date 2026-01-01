import express from 'express'
import registerRouter from './routs/registerR.js'
import encAndDecRouter from './routs/encAndDecR.js'
import usersRouter from './routs/usersR.js'


const port = process.env.port
const app = express()

app.use(express.json())


app.use("/api/auth", registerRouter)
app.use("/api/messages", encAndDecRouter)
app.use("/api/user", usersRouter)


app.listen(port, () => {
    console.log(`listenning on port ${port}`);
})