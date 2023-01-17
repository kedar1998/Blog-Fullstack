import express from 'express'
const router =  express.Router()
import {getAllBlogs, createBlog, getBlog, updateBlog, deleteBlog} from '../controllers/blogController.js'


router.route("/").get(getAllBlogs).post(createBlog)

router.route("/:id").get(getBlog).patch(updateBlog).delete(deleteBlog)



export default router