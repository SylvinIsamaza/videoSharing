import { Avatar, Card, CardContent, CardMedia, Stack, Typography } from '@mui/material'
import React from 'react'


function Account() {
  return (
    <Stack sx={{
        display:'flex',
        gap:'20px',
        padding:'0 20px'
    }}>

 <Card sx={{
    display:'flex',
    flexDirection:'column',
    padding:' 0 10px ',
    marginTop:'3%',
gap:7
 }}>
    <Typography variant='h5'>
        Your profile
    </Typography>
  <Avatar src=''/>
<CardContent sx={{
    display:'flex',
    gap:'20px'
}}>
    <Typography>
        Account
    </Typography>
    <Typography>
        Account
    </Typography>
</CardContent>

 </Card>
 <Card sx={{
    display:'flex',
    flexDirection:'column',
     padding:' 0 10px ',
    gap:7
 }}>
    <Typography variant='h5'>
        Your channel
    </Typography>
  <Avatar src=''/>
<CardContent sx={{
    display:'flex',
    gap:'20px'
}}>
    <Typography>
    views
    </Typography>
    <Typography>
        subscribers
    </Typography>
</CardContent>

 </Card>
    </Stack>
  )
}

export default Account