import express from 'express';
import dotenv from 'dotenv'
dotenv.config()
const app = express()
import connect from './DB/connect.js'
import 'express-async-errors'


// MIDDLEWARE
app.use(express.json())

// ROUTES IMPORT
import userRoute from './routes/user.js'

// ROUTES
app.use("/api/v1/user", userRoute)

app.listen(3000, () =>{
    connect(process.env.DATABASE)
    console.log("Listinging on 3000");
})