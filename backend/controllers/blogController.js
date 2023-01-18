import Blog from '../models/Blog.js'

const getAllBlogs = async (req,res) =>{

    const blog = await Blog.find({})

    res.json({
        Status: "Success",
        count: blog.length,
        blog
    })
}

const createBlog = async (req,res) =>{
    const blog = await Blog.create(req.body)
    res.json({Status: "Success", blog})
}

const getBlog = async (req,res) =>{
    const {id} = req.params
    const blog = await Blog.find({_id: id})
    res.json({
        Status: "Success",
        blog
    })
}

const updateBlog = async (req,res) =>{

    const {id} = req.params
    const blog = await Blog.findByIdAndUpdate({_id: id}, req.body, {new: true, runValidators: true})

    res.json({Status: "Success", blog})
}

const deleteBlog = async (req,res) =>{
    const {id} = req.params
    const blog = await Blog.deleteOne({_id: id})

    res.json({Status: "Successfully Deleted"})
}

export {getAllBlogs, createBlog, getBlog, updateBlog, deleteBlog}