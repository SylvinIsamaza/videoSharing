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
            
                const user= await new User({...req.body,password:hashedPassword})
                user.save()
                .then(user=>{
                    console.log(user)
                  return  res.status(200).send({user,message:'user registered'})
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
  
   const isCorrect=await bcrypt.compare(password,user.password)
   if(isCorrect){
    const token=jwt.sign({id:user.id},'secret',{expiresIn:'30d'})
   return res.cookie("access_token",token,{
        httpOnly:true
    }).status(200).json(lodash.pick(user,['id','name','email','subscribers','subscribedUser','img']))
 
   

   }
   else{
    return res.status(401).send("wrong password")
   }

}
const googleAUth=async(req,res)=>{
    const user=await User.findOne({email:req.body.email})
    if(user){
        const token=jwt.sign({id:user.id},'secret',{expiresIn:'30d'})
        return res.cookie("access_token",token,{
            httpOnly:true
        }).status(200).json(user)
    }
    else{
        const newUser=new User({...req.body
            ,fromGoogle:true})
            const savedUser=await newUser.save();
            const token=jwt.sign({id:savedUser.id},'secret',{expiresIn:'30d'})
            return res.cookie("access_token",token,{
                httpOnly:true
            }).status(200).json(savedUser)
    }
    
}
module.exports={signUp,login,googleAUth}