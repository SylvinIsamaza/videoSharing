import { Button, Card, IconButton, Stack, Typography } from '@mui/material'
import React, { useEffect } from 'react'
import TextField from '@mui/material/TextField';
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';
import {Link} from 'react-router-dom'


import {logo} from '../../data/constants'

import NavbarAuth from './NavbarAuth';

function Login({inputThemes,showNavigation,changeThemes,setThemes}) {
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
<TextField  label="Enter your email" variant="outlined" type='email' sx={{
    margin:'20px  0'
  }} />
  <TextField  label="password" variant="outlined" type='password' sx={{
    margin:'20px  0'
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
gap:'7px',
mb:'20px'
}}>
  Don't have account <Link to='/signup' sx={{
    color:'#0000ff',
    cursor:'pointer',
    textDecoration:'none'
  }}>create account</Link> 
</Typography>

</Card>
    </Stack>



    </>
  )
}

export default Login