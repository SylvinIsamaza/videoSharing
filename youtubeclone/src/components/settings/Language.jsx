import { MenuItem, Select, Stack,Card, FormControl, InputLabel, Typography } from '@mui/material'
import React, { useState } from 'react'


function Languages() {
  const [language,setLanguage]=useState("English")
  const handleChange=(event)=>{
setLanguage(event.target.value);
  }
  return (
<Stack sx={{
  display:'flex',
  alignItems:'center',
  justifyContent:'center',
  height:'100%'
}}>
  <Typography variant='h4' p='10px 0'>
    Select  your prefered language
  </Typography>
  <Card sx={{
    width:'300px',
    display:'flex',
    alignItems:'center',
    justifyContent:'center',
    height:'200px',
    justifySelf:"center"
  }}>
    <FormControl>

      <InputLabel id="language_label">Language</InputLabel>
    <Select sx={{
      width:"200px"
    }} value={language} onChange={handleChange } labelId='language_label' label="Language">
      <MenuItem value="English">English</MenuItem>
      <MenuItem value="French">French</MenuItem>
      <MenuItem value="Spanish">Spanish</MenuItem>
      <MenuItem value="Chinese">Chinese</MenuItem>
      <MenuItem value="Kiswahili">Kiswahili</MenuItem>
    </Select>
    </FormControl>
  </Card>
</Stack>
  )
}

export default Languages