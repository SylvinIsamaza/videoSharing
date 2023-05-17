const express=require('express')
const createError = require('../errorHandling/error')
const User=require('../models/user')
const lodash=require('lodash')
async function getUser(req, res, next) {
    try {
        const user=await User.findById(req.params.id)
           res.status(200).json(user)   
    } catch (err) {
        next(err)
    }
}
async function update(req, res, next) {
    if(req.params.id===req.user.id){
try {
    const updatedUser=await User.findByIdAndUpdate(req.params.id,req.body,{new:true})
    .then(user=>{
        res.send(lodash.pick(user,["name","email","id"]))
    })
    .catch(err=>{
        next(err)
    }
    )
} catch (err) {
    next(err)
}
    }
    else{
next(createError("401","you can only update your account"))
    }
}
async function deleting(req, res, next) {
    if(req.params.id===req.user.id){
        try {
            const updatedUser=await User.findByIdAndDelete(req.params.id,req.body,{new:true})
            .then(user=>{
                res.send("user successfully deleted")
            })
            .catch(err=>{
                next(err)
            }
            )
        } catch (err) {
            next(err)
        }
            }
            else{
        next(createError("401","you can only delete your account"))
            }
        }

async function subscribe(req, res, next) {
try {
    await User.findByIdAndUpdate(req.user.id,{
        $push:{subscribedUser:req.user.id}
    })
    await User.findByIdAndUpdate(req.params.id,{
      $inc:{subscribers:1}
    })
    res.status(200).json("subscription successfull")
} catch (err) {
    next(err)
}
}
async function unsubscribe(req, res, next) {
    try {
        await User.findByIdAndUpdate(req.params.id,{
            $pull:{subscribedUser:req.user.id}
        })
        await User.findByIdAndUpdate(req.params.id,{
          $inc:{subscribers:-1}
        })
        res.status(200).json("subscription successfull")
    } catch (err) {
        next(err)
    }
}
async function like(req, res, next) {
    res.send("get user")
}
async function unlike(req, res, next) {
    res.send("get user")
}
module.exports={
    getUser,
    update,
    deleting,
    subscribe,
    unsubscribe,
        like,
        unlike}