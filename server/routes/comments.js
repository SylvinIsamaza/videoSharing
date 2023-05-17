const express=require('express')
const { getComment, deleteComment, addComment } = require('../controllers/comments')
const verifyToken = require('../middleware/verifyToken')
const router=express.Router()

router.post('/newComment/:id',verifyToken,addComment)
router.get('/:id',getComment)
router.delete('/:id',verifyToken,deleteComment)

module.exports=router