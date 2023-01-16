import User from '../models/User.js'
import UnauthenticatedError from '../errors/unauthenticated.js'
import BadrequestError from '../errors/bad-request.js'

const login = async (req,res) =>{
    
    const {email, password} = req.body

    if(!email || !password){
        throw new BadrequestError("Provide all values")
    }

    const user = await User.findOne({email})

    if(!user){
        throw new UnauthenticatedError("invalid credentials")
    }

    const isMatch = await user.comparePassword(password)

    if(!isMatch){
        throw new UnauthenticatedError("invalid credentials")
    }
    
    const token = user.createJWT()
    res.json({
        status: "Success",
        user,
        token: token,
    })

}

const register = async (req,res) =>{
    const {firstName, lastName, email, password, about} = req.body

    if(!firstName || !lastName || !email || !password || !about){
        throw new BadrequestError("Provide all values")
    }

    const userAlreadyExist = await User.findOne({email})

    if(userAlreadyExist){
        throw new BadrequestError("user already exists")
    }

    const user = await User.create(req.body)
    const token = user.createJWT()
    
    res.json({
        status: "Success",
        user,
        token
    })
}

export {login, register}