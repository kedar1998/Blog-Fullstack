const getAllBlogs = (req,res) =>{
    res.json({msg: "Get All Blogs"})
}

const createBlog = (req,res) =>{
    res.json({msg: "Create Blog"})
}

const getBlog = (req,res) =>{
    res.json({msg: "Get Single Blog"})
}

const updateBlog = (req,res) =>{
    res.json({msg: "Update Blog"})
}

const deleteBlog = (req,res) =>{
    res.json({msg: "Delete Blog"})
}

export {getAllBlogs, createBlog, getBlog, updateBlog, deleteBlog}