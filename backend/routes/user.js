import express from 'express'
const router = express.Router()
import {login, register} from '../controllers/user.js'




router.post("/login", login).post("/register", register)






export default router