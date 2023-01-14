import User from '../models/User.js'

const login = async (req,res) =>{
    
    const {email, password} = req.body
    const user = await User.findOne({email})
    const isMatch = await user.comparePassword(password)
    if(isMatch){
         res.json({
            status: "Success"
        })
        return 
    }

    res.json({
        error: "fail"
    })
}

const register = async (req,res) =>{
    const user = await User.create(req.body)
    
    res.json({
        status: "Success",
        user
    })
}

export {login, register}