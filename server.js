import express from 'express'
// import  from './routes/.js'

const port = process.env.port
const app = express()

app.use(express.json())





// app.use("/", )





app.listen(port, () => {
    console.log(`listenning on port ${port}`);
})