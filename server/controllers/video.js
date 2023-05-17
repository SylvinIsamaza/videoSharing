const mongoose = require('mongoose');

const Video = require('../models/Video');
const User = require('../models/user');
const createError = require('../errorHandling/error');
async function addVideo(req, res, next) {
    const newvideos=await Video.insertMany({...req.body,id:req.body.id.videoId})

    // const newVideo = await new Video({
    //     userId: req.user.id,
    //     ... req.body
    // })

    try {
        // await newVideo.save()
        
        res.status(200).json(newvideos)
    } catch (err) {
        next(err)
    }
}
async function deleteVideo(req, res, next) {
const video=await Video.findById(req.params.id)

if(video!=null){
    if(req.user.id==video.userId){
        await Video.findByIdAndDelete(req.params.id)
        res.status(200).send("video deleted successfully")
    }
    else{
        next(createError(403,"you can't delete a video"))
    }
}
else{
    next(createError(404,"video not found"))
}
   

}
async function updateVideo(req, res, next) {
    try {
        const video = await Video.findById(req.params.id).then(async video => {
            if (req.user.id == video.userId) {
                const updatedVideo = await Video.findByIdAndUpdate(req.params.id, req.body, {new: true})
                return res.status(200).send(updatedVideo)
            } else 
            {
                return next(createError(403, "unable to update video"))
            }
        })


    } catch (err) {
        next(err)
    }
}
async function getVideo(req, res, next) {
    
  
        const video = await Video.findById(req.params.id)
        .then((video)=>{
          if(video!=null){
            return  res.status(200).json(video)
          }
                else{
                    return res.status(404).send("video not found")
                }
            
        })
        .catch(err=>{
            next(err)
        })
     
       

   
}
async function trend(req, res, next) {
    const videos = await Video.find(req.params.id).sort({views: -1})

    try {
        res.status(200).json(videos)
    } catch (err) {
        next(err)
    }
}
async function random(req, res, next) {
    const video = await Video.aggregate([{
            $sample: {
                size: 40
            }
        }])

    try {
        res.status(200).json(video)
    } catch (err) {
        next(err)
    }
}
async function sub(req, res, next) {


    try {
        const users = await User.findById(req.user.id)
        console.log(users)
        const subscribedUser = users.subscribedUser
        console.log(subscribedUser)

        const list = await Promise.all(subscribedUser.map((channelId) => {
            return Video.find({userId: channelId})
        }))
        res.status(200).json(list.flat().sort((x,y)=>y.createdAt-x.createdAt))
    } catch (err) {
        next(err)
    }
}
async function addViews(req, res, next) {
    const video = await Video.findByIdAndUpdate(
    req.params.id
, {
        $inc: {
            views: 1
        }
    }).then((video) => {
        res.status(200).send("view was increased")
    }).catch(err => {
        next(err)
    })
}
async function likevideo(req,res,next){
    try {
       const video= await Video.findByIdAndUpdate(req.params.id,{
            $push:{likes:req.user.id}
        })
        .then((video)=>{
            if(video==null){
                return next(createError(404,"video not found"))
                    }
                      return  res.status(200).send("video liked")
        })

    } catch (err) {
        next(err)
    }

}
async function dislikeVideo(req,res,next){
    const dislikedVideo=await Video.findByIdAndUpdate(req.params.id,{
    $pull:{likes:req.user.id},
    $push:{dislikes:req.user.id}
    })
    .then(video=>{
        if(video==null){
            return next(createError(404,"video not found"))
        }
        else{
            return res.status(200).send("video disliked")
        }
    })
}
async function tags(req,res,next){
    const tag=req.query.tags.split(",")
    console.log(tag)
const video=await Video.find({tag:{$in:tag}}).limit(20)
.then((video)=>{
    if(video==null){
    return next(createError(404,"video not found"))
    }
    else{
        return res.status(200).json(video)
    }
})
.catch(err=>{
    next(err)
})
}
async function search(req,res,next){
    const query=req.query.q
    const video=await Video.find({title:{$regex:query,$options:"i"}}).limit(40)
    .then(video=>{
        if(video==null){
            return next(createError(404,"video not found"))
        }
        else{
            res.status(200).send(video)
        }
    })

}
module.exports = {
    addVideo,
    updateVideo,
    deleteVideo,
    getVideo,
    random,
    trend,
    sub,
    likevideo,
    dislikeVideo,
    addViews,
    tags,
    search
}
