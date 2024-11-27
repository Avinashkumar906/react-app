const jwt = require('jsonwebtoken');

const isAuthenticatedUser = (req,res,next)=>{
    // get user id from jwt token and appent in body
    const token = req.header('auth-token')
    if(!token ){
        return res.status(401).send({message:'Not authenticated user.'});
    }
    try {        
        req.user = jwt.verify(token,process.env.JWTSEC)
        next()
    } catch (error) {
        res.status(401).send({message:'Not authenticated user.'})
    }
}

module.exports = {isAuthenticatedUser};