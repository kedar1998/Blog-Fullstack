import express from 'express';
import dotenv from 'dotenv'
dotenv.config()
const app = express()
import connect from './DB/connect.js'
import 'express-async-errors'
import errorHandlerMiddleware from './middlewares/handle-error.js';
import authenticate from './middlewares/authenticate.js';


// MIDDLEWARE
app.use(express.json())

// ROUTES IMPORT
import userRoute from './routes/userRoute.js'
import blogRoute from './routes/blogRoute.js'

// ROUTES
app.use("/api/v1/user", userRoute)
app.use("/api/v1/blog", blogRoute)

app.use(errorHandlerMiddleware)


app.listen(5000, () =>{
    connect(process.env.DATABASE)
    console.log("Listinging on 5000");
})