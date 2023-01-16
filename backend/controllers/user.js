import User from '../models/User.js'

const login = async (req,res) =>{
    
    const {email, password} = req.body
    const user = await User.findOne({email})
    const isMatch = await user.comparePassword(password)
    if(isMatch){
        const token = user.createJWT()
        res.json({
            status: "Success",
            user,
            token: token,
        })
        return 
    }

    res.json({
        error: "fail"
    })
}

const register = async (req,res) =>{
    const user = await User.create(req.body)
    const token = user.createJWT()
    
    res.json({
        status: "Success",
        user,
        token
    })
}

export {login, register}