import express from 'express'
const router = express.Router()
import {login, register} from '../controllers/userController.js'




router.post("/login", login).post("/register", register)






export default router