import { Button, Card, IconButton, Stack, Typography } from '@mui/material'
import React, { useEffect, useState } from 'react'
import TextField from '@mui/material/TextField';
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';
import {Link} from 'react-router-dom'


import {logo} from '../../data/constants'

import NavbarAuth from './NavbarAuth';
import { login } from '../../services/auth';

function Login({inputThemes,showNavigation,changeThemes,setThemes}) {
  const [email,setEmail]=useState('')
  const [password,setPassword]=useState('')
  const [data,setData]=useState({})
  function handleData(){
    setData({email,password})
  }
 async function handleSubmit(e){
    e.preventDefault()
    await setData({email,password})
  login(data)
  }
  useEffect(()=>{
    showNavigation();
  },[window.location.href])
  return (
    <>
    <NavbarAuth changeThemes={changeThemes} setThemes={setThemes={}}></NavbarAuth>
    <Stack mt={20} width='100%' display='flex' alignItems='center' sx={{
      zIndex:3
    }}>
      
  <Card sx={{
  display:'flex',
  alignItems:'center',
  flexDirection:'column',
  justifyContent:'space-between',
  width:'400px',
 
  
  }}>
   
    <Typography  variant='h2' component='p' sx={{
      margin:'20px 0'
    }}>
Login
    </Typography>
    <form method='POST' onSubmit={handleSubmit} style={{
      display:'flex',
      alignItems:"center",
     
      flexDirection:'column',
    }}>
<TextField  label="Enter your email" variant="outlined" type='email' name='email' sx={{
    margin:'20px  0'
  }} onChange={(e)=>{
    setEmail(e.target.value);
   handleData();
  }} />
  <TextField  label="password" variant="outlined" name='password' type='password' sx={{
    margin:'20px  0'
  }} onChange={(e)=>{
    setPassword(e.target.value);
    handleData();
  }}/>


  <Typography sx={{
  textAlign:'end',
  width:'80%',
 display:'flex',
 justifyContent:'flex-end'
,
gap:'7px'
}}>
   <Link to='/' sx={{
    color:'#0000ff',
    cursor:'pointer',
    textDecoration:'none'
  }}>forgot Password ?</Link> 
</Typography>
  <Button  variant='contained' sx={{
    margin:'20px 0'
  }} type='submit'>Login</Button>
  <Typography sx={{
 
  width:'80%',
 display:'flex',

 alignItems:'center',
 justifyContent:'center',

mb:'20px'
}}>
  Don't have account <Link to='/signup' sx={{
    color:'#0000ff',
    cursor:'pointer',
    textDecoration:'none'
  }}>create account</Link> 
</Typography>
</form>
</Card>
    </Stack>



    </>
  )
}

export default Login