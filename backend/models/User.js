import mongoose from 'mongoose'
import bcrypt from 'bcryptjs'

const userSchema = new mongoose.Schema({
    firstName: {
        type: String,
        required: [true, "Firstname is required"],
        minlength: 2, 
    },
    lastName: {
        type: String,
        required: [true, "Lastname is required"],
        minlength: 2, 
    },
    email: {
        type: String,
        required: [true, "Email is required"],
        unique: true,
    },
    password: {
        type: String,
        required: [true, "password is required"],
        minlength: 6,
    },
    role: {
        type: String,
        enum: ["user", "admin"],
        default: "user",
    },
    about: {
        type: String,
        required: [true, "Information about user is required"],
        minlength: 50,
    },
    liked: {
        type: [String],
    }
})

userSchema.pre("save", async function(){
    const salt = await bcrypt.genSalt(8)
    this.password = await bcrypt.hash(this.password, salt)
})


userSchema.methods.comparePassword = async function(providedPassword){
    return await bcrypt.compare(providedPassword, this.password)
}


export default mongoose.model("User", userSchema)