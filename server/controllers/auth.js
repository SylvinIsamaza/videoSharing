const User = require("../models/user")
const bcrypt=require("bcrypt")
const jwt=require("jsonwebtoken")
const lodash=require("lodash")
async function signUp(req,res,next){
    // console.log(req.body)
    // res.send('register user')
    try {
        const findUser=await User.findOne({name:req.body.name})
        const findEmail=await User.findOne({email:req.body.email})
        if(findUser){
            res.send("user already registered")
        }
        else if(findEmail){
            res.send("email already registered")
        }
        else{
            bcrypt.hash(req.body.password,10)
            .then(async hashedPassword=>{
              
                const user= await new User({password:hashedPassword,...req.body})
                user.save()
                .then(user=>{
                    console.log(user)
                    res.send(user)
                })
                .catch(err=>{
    next(err)
                })
               
            })
            .catch(err=>{
                next(err)
              
            }) 
        }
     
       
    } catch (err) {
        next(err)
    }
}
async function login(req,res){
    const user=req.user;
    console.log(user)
   const password=req.body.password;
  
   const isCorrect=bcrypt.compare(user.password,password)
   if(isCorrect){
    const token=jwt.sign({id:user.id},'secret',{expiresIn:'30d'})
    res.cookie("access_token",token,{
        httpOnly:true
    }).status(200).json(lodash.pick(user,['id','name','email','subscribers','subscribedUser',]))
  
   

   }
   else{
    res.send("wrong password")
   }
}
module.exports={signUp,login}