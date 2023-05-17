const express=require('express')
const verifyToken = require('../middleware/verifyToken')
const {addVideo,updateVideo,deleteVideo,getVideo, random, sub, trend, likevideo, dislikeVideo, addViews, tags, search}=require("../controllers/video")
const router=express.Router()
router.post('/',verifyToken,addVideo)
router.put('/:id',verifyToken,updateVideo)
router.get('/trend',trend)
router.get('/random',random)
router.get('/tags',tags)
router.get('/search',search)
router.get('/:id',getVideo)
router.delete("/:id",verifyToken,deleteVideo)
router.get('/user/sub',verifyToken,sub)
router.put('/likeVideo/:id',verifyToken,likevideo)
router.put('/dislikeVideo/:id',verifyToken,dislikeVideo)
router.put('/addviews/:id',verifyToken,addViews)


module.exports =router