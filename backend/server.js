import express from 'express';
import dotenv from 'dotenv'
dotenv.config()
const app = express()
import connect from './DB/connect.js'


app.get("/", (req,res) =>{
    res.send("Hello")
})

app.listen(3000, () =>{
    connect(process.env.DATABASE)
    console.log("Listinging on 3000");
})