const createError = require('../errorHandling/error')
const Comment = require('../models/Comment')
const Video = require('../models/Video')

async function addComment(req,res,next){
    try {
        const comment=new Comment({userId:req.user.id,videoId:req.params.id,...req.body})
        comment.save()
        .then(comment=>{
            res.status(201).json(comment)
        })
        .catch(err=>{
            next(err)
        })
    } catch (err) {
        next(err)
    }
}
async function getComment(req,res,next){
    try {
        const comment=await Comment.find({videoId:req.params.id})
      
        .then(comment=>{
            res.status(201).json(comment)
        })
        .catch(err=>{
            next(err)
        })
    } catch (err) {
        next(err)
    }
}
async function deleteComment(req,res,next){
 

  
    try {
        
        const video=await Video.findById(req.params.id)
        console.log(video)
        const comment=await Comment.findOne({videoId:req.params.id})
        .then(async(comment)=>{
            if(req.user.id===comment.userId||req.user.id===video.userId){
             const deletedComment=await Comment.findByIdAndDelete(comment.id)
         
               .then(deletedcomment=>{
                   res.status(200).json("successfully deleted")
               })
               .catch(err=>{
                   next(createError(500,"couldn't delete comment"))
               })
           }
           else{
               next(createError(403,"you are not allowed to delete this comment"))
           }
        })
       
  
    } catch (err) {
        next(err)
    }
}


module.exports={addComment,getComment,deleteComment}
