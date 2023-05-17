const mongoose=require('mongoose');
const User=require("../models/user")
async function verifyUser(req,res,next){
    const username=req.METHOD=="GET"?req.params:req.body.name
    try {
        const user=await User.findOne({name:username})
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