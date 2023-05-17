const express = require('express');
const {signUp, login}=require('../controllers/auth');
const verifyUser = require('../middleware/verifyUser');
const router=express.Router();
// CREATE A USER
router.post('/signUp',signUp,)
//SIGN IN A USER
router.post('/signIn',verifyUser,login)
//GOOGLE AUTH
router.post('/google')

module.exports=router