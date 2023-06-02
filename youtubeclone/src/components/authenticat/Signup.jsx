import { Alert, Button, Card, IconButton, Snackbar, Stack, Typography } from '@mui/material'
import React, { useEffect, useState } from 'react'
import TextField from '@mui/material/TextField';
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';
import axios from 'axios'

import store from '../../redux/store';

import {logo} from '../../data/constants'
import NavbarAuth from './NavbarAuth';
import { Link, useNavigate } from 'react-router-dom';
import {createUser} from '../../services/auth';


import { useDispatch,useSelector } from 'react-redux';
import { loginStart } from '../../redux/userState';

function Signup({changeThemes,inputThemes,setThemes,showNavigation}) {
  const[openSnackbar,setoPenSnackbar]=useState(false);
  const closeSnackBar=()=>{
    setoPenSnackbar(false)
  }

  const dispatch=useDispatch()
  const [email,setEmail]=useState("");
  const [username,setUsername]=useState("");
  const [password,setPassword]=useState("");
  const [data,setData]=useState({
    email:'',
    password:'',
    name:username
  })
 
  let snackmsg='user succcessfully created';
  const navigate=useNavigate()
function setSnackMessage(message){
snackmsg=message
}

  
async function handleSubmit(event){
  event.preventDefault();
 
 await createUser({email,password,name:username},setSnackMessage)
 dispatch(loginStart())
 setoPenSnackbar(true)
 console.log(snackmsg)
  }


 

  useEffect(()=>{
    showNavigation();
  },[window.location.href])
  return (
    <>
    <NavbarAuth changeThemes={changeThemes} inputThemes={inputThemes} setThemes={setThemes}></NavbarAuth>
   
    <Stack mt={4} width='100%' display='flex' alignItems='center'>
    <Typography  variant='h2' component='p' sx={{
      margin:'20px 0'
    }}>
Sign up
    </Typography>
  <Card sx={{
  display:'flex',
  alignItems:'center',
  flexDirection:'column',
  justifyContent:'space-between',
  width:'500px',
  padding:'20px 0'
 
  
  }}>
   

    <form method='POST' onSubmit={handleSubmit} style={{
      display:'flex',
      alignItems:'center',
      justifyContent:'center',
      flexDirection:'column',
    }} >
      
      <TextField  label="Enter your username" variant="outlined" type='text' sx={{
    margin:'20px  0',
  }} onChange={(event)=>{
    setUsername(event.target.value)
    
   
  }} name='username'/>
<TextField  label="Enter your email" variant="outlined" type='email' sx={{
    margin:'20px  0'
  }} onChange={(event)=>{
    setEmail(event.target.value)
    
    
  }} name='email'/>
  <TextField  label="password" variant="outlined" type='password' sx={{
    margin:'20px  0'
  }} onChange={(event)=>{
    setPassword(event.target.value)
   
    
  }} name='password'/>

  <Typography sx={{
  textAlign:'end',
  width:'100%',
 display:'flex',
 justifyContent:'flex-end'
,
gap:'7px'
}}>
  already have account <Link to='/login' style={{
    color:'blue'
  }}>Login</Link> 
</Typography>
  <Button  variant='contained' sx={{
    margin:'20px 0'
  }} type='submit' onClick={()=>{
  
   dispatch(loginStart())
   
  }}>Create account</Button>
</form>
<Snackbar open={openSnackbar} onClose={closeSnackBar}  autoHideDuration={1000}>
  <Alert severity='success' sx={{
    width:'100%'
  }}>
{snackmsg}
  </Alert>

</Snackbar>
</Card>
    </Stack>

    </>


  )
}

export default Signup