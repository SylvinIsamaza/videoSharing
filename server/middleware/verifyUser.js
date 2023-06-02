const mongoose=require('mongoose');
const User=require("../models/user")
async function verifyUser(req,res,next){
    const email=req.METHOD=="GET"?req.params:req.body.email
    try {
        const user=await User.findOne({email:email})
        .then(user=>{
            if(user===null){
                return res.status(404).send("user not found")
            }
            else{
                req.user=user
                console.log("user found")
                next();
            }
        })
       
    } catch (err) {
        next(err)
    }
   
}
module.exports=verifyUser