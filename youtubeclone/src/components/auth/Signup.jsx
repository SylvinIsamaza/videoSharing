import { Button, Card, IconButton, Stack, Typography } from '@mui/material'
import React, { useEffect } from 'react'
import TextField from '@mui/material/TextField';
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';



import {logo} from '../data/constants'
import NavbarAuth from './NavbarAuth';
import { Link } from 'react-router-dom';

function Signup({changeThemes,inputThemes,setThemes,showNavigation}) {
  useEffect(()=>{
    showNavigation();
  },[window.location.href])
  return (
    <>
    <NavbarAuth changeThemes={changeThemes} inputThemes={inputThemes} setThemes={setThemes}></NavbarAuth>
   
    <Stack mt={20} width='100%' display='flex' alignItems='center'>
      
  <Card sx={{
  display:'flex',
  alignItems:'center',
  flexDirection:'column',
  justifyContent:'space-between',
  width:'500px',
 
  
  }}>
   
    <Typography  variant='h2' component='p' sx={{
      margin:'20px 0'
    }}>
Sign up
    </Typography>
<TextField  label="Enter your email" variant="outlined" type='email' sx={{
    margin:'20px  0'
  }} />
  <TextField  label="password" variant="outlined" type='password' sx={{
    margin:'20px  0'
  }}/>
  <TextField  label="confirm your password" variant="outlined" type='password' sx={{
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
  already have account <Link to='/login' sx={{
    color:'#0000ff',
    cursor:'pointer',
    textDecoration:'none'
  }}>Login</Link> 
</Typography>
  <Button  variant='contained' sx={{
    margin:'20px 0'
  }} type='submit'>Create account</Button>


</Card>
    </Stack>

    </>


  )
}

export default Signup