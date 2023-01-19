import UnauthenticatedError from "../errors/unauthenticated.js"
import jwt from 'jsonwebtoken'

const authenticate = (req,res,next) => {
    const authHeader = req.headers.authorization

    if(!authHeader || !authHeader.startsWith("Bearer")){
        throw new UnauthenticatedError("Authentication Invalid")
    }
    
    const token = authHeader.split(" ")[1];
    
    try{
        const payload = jwt.verify(token, process.env.JWT_SECRET)
        req.user = {userId: payload.userId, name: payload.name}
        console.log(req.user);
        next()
    } catch (err){
        throw new UnauthenticatedError("Authentication Invalid")
    }

}

export default authenticate