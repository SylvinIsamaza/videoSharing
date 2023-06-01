import { Card, FormControl, InputLabel, MenuItem, Stack, TextField,Select, Typography } from '@mui/material'
import React, { useState } from 'react'

function Theme({setThemes,changeThemes,theme}) {
   console.log(theme)
  return (
    <Stack sx={{
      display: 'flex',
      alignItems: 'center',
      flexDirection: 'column',
      justifyContent: 'center',
      height:'100%'
      
    }}>
      <Typography variant='h4' sx={{
        p:'20px 0'
      }}>
        Customise your theme
      </Typography>
   <Card sx={{
  padding:'50px'
   }}>
    <FormControl>
<InputLabel id="themes"> Theme</InputLabel>
    <Select labelId="theme" label="themes" sx={{
      width:'200px'
    }} value={theme} onChange={changeThemes} >
 <MenuItem value="dark">dark
 </MenuItem>
 <MenuItem value="light">light
 </MenuItem>
</Select>
    </FormControl>
  

   </Card>
    </Stack>
  )
}

export default Theme