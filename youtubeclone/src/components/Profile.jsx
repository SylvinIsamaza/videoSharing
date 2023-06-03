import { Card, CardMedia, Stack,Box,Typography,TextField,Button, Avatar} from '@mui/material'
import React, { useEffect } from 'react'
import profilePic from '../assets/stylish-black-girl.jpg'
import { useSelector,useDispatch } from 'react-redux'
function Profile({showNavigation}) {
  const {user}=useSelector((state)=>state.user)
  console.log(user)
  useEffect(()=>{
    showNavigation();
  },[window.location.href])
  return (
    <Stack mt={20} width='100%' display='flex' alignItems='center' sx={{
  
    }}>
        <Typography  variant='h2' component='p' sx={{
      margin:'20px 0'
    }}>
Profile
    </Typography>
  <Card sx={{
  display:'flex',
  alignItems:'center',
  flexDirection:'column',
  justifyContent:'space-between',
  width:'500px',
 
  
  }}>
   
  
    <Avatar src={user?user.img:'' } sx={{
      width:'100px',
      height:'100px'
    }}></Avatar>
    <div style={{
      display:'flex',
      gap:'4px'
    }}>
<TextField  label="Enter your email" variant="outlined" type='email' sx={{
    margin:'20px  0'
  }} />
  <TextField  label="password" variant="outlined" type='password' sx={{
    margin:'20px  0'
  }}/>
  </div>
  <div style={{
      display:'flex',
      gap:'4px'
    }}>
<TextField  label="Enter your email" variant="outlined" type='email' sx={{
    margin:'20px  0'
  }} />
  <TextField  label="password" variant="outlined" type='password' sx={{
    margin:'20px  0'
  }}/>
  </div>
 
 
  <Button  variant='contained' sx={{
    margin:'20px 0'
  }} type='submit'>Create account</Button>


</Card>
    </Stack>



  )
}

export default Profile