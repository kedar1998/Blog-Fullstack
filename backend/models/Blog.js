import mongoose from 'mongoose'

const blogSchema = new mongoose.Schema({
    title: {
        type: String,
        required: [true, "title for blog is required"],
        trim: true,
    },
    tags: {
        type: [String],
        required: [true, "tags for blog is required"]
    },
    description: {
        type: String,
        required: [true, "description for blog is required"],
        trim: true,
    },
    createdBy: {
        type: mongoose.Types.ObjectId,
        required: [true, "createdBy for blog is required"]
    },
    views: {
        type: Number,
        default: 0,
    },
    likes: {
        type: Number,
        default: 0,
    },
    comments: {
        type: [String],
    },
    date: {
        type: Date,
    },
    readTime: {
        type: Number,
    },

})

export default mongoose.model("Blog", blogSchema)