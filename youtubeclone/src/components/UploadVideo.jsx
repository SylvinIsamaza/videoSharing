import { Stack, TextField ,Box, Typography, InputLabel, MenuItem,Select, FormControl, Button,Card} from '@mui/material'
import React, { useState } from 'react'

function UploadVideo() {
    const[visibility,setVisibility]=useState('public')
    function handleChangeSelect(e){
     setVisibility(e.target.value)
     console.log(e.target.value)
    }

  return (
    <Stack sx={{
        width:'100%',
        height:"100%",
        alignItems:'center',
        display:'flex',
        justifyContent:'center',
        textAlign:'center',
        flexDirection:'column',
       
       

    }}>
    <Box  sx={{
        
        justifyContent:'center',
        alignItems:'center',
        flexDirection:'column',
        display:'flex',
        border:'1px solid gray',
        padding:'60px 60px',
        borderRadius:'10px',
        boxShadow:'-8px 8px 4px  gray'
    }}>
  <Typography  component='h1' m='10px 0' p='20px 0' sx={{
    fontSize:'20px'
  }}>
    Upload video
    </Typography>
   <Box sx={{
    display:'flex',
   }}>
    
<Box  sx={{
    display:'flex',
    flexDirection:'column',
    alignItems:'center',
    justifyContent:'center',
    gap:'30px',
   flex:1
    
}}>
    <label htmlFor="video" style={{
        padding:'10px 10px',
        backgroundColor:'#1976d2',
        borderRadius:'6px',
        textTransform:"uppercase",
        color:'white',
        fontSize:'15px',
        fontWeight:'580',
        fontFamily:'helvetica',
        cursor:'pointer',
        
    }}>Upload Video</label>
    <input type='file' id='video' style={{
        display:'none'
    }}></input>
    <div style={{
        display:'flex',
        gap: '10px',
        flexDirection:'column',
        width:'100%'
       
    }}>
        <FormControl required>
     <TextField label="Title of your video"  sx={{
        width: '100%',
     }}/>

     </FormControl>
     <FormControl required>
    <TextField label="enter the description of your video"/>
    </FormControl>
    </div>
    <div style={{
        display:'flex',
        gap: '10px',
    }}>
        
    <TextField label="Tags separated by,"/>
    <FormControl>
    <InputLabel id="demo-simple-select-label"> Visibility</InputLabel>
    <Select 
    labelId='demo-simple-select-label' 
    label="Visibility"
    onChange={handleChangeSelect}
    value={visibility}
    sx={{
        width:'240px'
    }}>
        <MenuItem value="Public">Public </MenuItem>
        <MenuItem value="Private">Private</MenuItem>
    </Select>
    </FormControl>
    </div>
    
</Box>
<Card sx={{
       width:'200px',
       height:'200px',
       ml:'20px'
}
 
}>
    <Typography> this is video card</Typography>
</Card>
</Box>
<Button variant='contained' type='submit' sx={{
    mt:'20px'
}}>Publish</Button>
    </Box>

   
    </Stack>
  )
}

export default UploadVideo