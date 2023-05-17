const express = require('express');
const { getUser, update, deleting, subscribe, like, unlike,unsubscribe }=require('../controllers/users');
const verifyToken = require('../middleware/verifyToken');

const router=express.Router()
router.get('/:id',getUser)
router.put('/update/:id',verifyToken,update)
router.delete('/delete/:id',verifyToken,deleting)
router.put('/sub/:id',verifyToken,subscribe)
router.put('/unsub/:id',verifyToken,unsubscribe)
router.put('/like/:videoId',verifyToken,like)
router.put('/dislike/:videoId',verifyToken,unlike)
module.exports=router