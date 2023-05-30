import { Stack, TextField ,Box, Typography} from '@mui/material'
import React from 'react'

function UploadVideo() {
  return (
    <Stack sx={{
        width:'100%',
        height:'100%',
        alignItems:'center',
        display:'flex',
        justifyContent:'center',
        textAlign:'center',
        flexDirection:'column',
    }}>
    <Box  sx={{
        width:'100%',
        justifyContent:'center',
        alignItems:'center',
        flexDirection:'column',
        display:'flex'
    }}>
  <Typography variant='text' component='h1' m='10px 0' p='20px 0'>
 Upload video
    </Typography>
<Box  sx={{
    display:'flex',
    flexDirection:{sx:'column',md:'row'},
    alignItems:'center',
    justifyContent:'center',
    gap:'30px'
    
}}>
     <TextField label="Title of your video"/>
    <TextField label="enter the description of your video"/>
    
    
</Box>

    </Box>


    </Stack>
  )
}

export default UploadVideo