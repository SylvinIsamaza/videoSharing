const jwt=require('jsonwebtoken');
const createError = require('../errorHandling/error');

async function verifyToken(req, res, next) {
const token=req.cookies.access_token;

if(!token){
   return next(createError(401,"unauthorized"));
}
else{
    jwt.verify(token,'secret',(err,user)=>{
        if(err) return next(createError(401,"invalid token"))
        else{
            req.user=user;
            // res.send(req.user)
            next();
        }
    })
}
}
module.exports=verifyToken;