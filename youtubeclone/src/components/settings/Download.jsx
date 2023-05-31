import { Label } from '@mui/icons-material'
import { Button, Card, CardContent, FormControl, InputLabel, MenuItem, Select, Stack, TextField, Typography } from '@mui/material'
import React from 'react'

function Download() {
  return (
    <Stack sx={{
        display: 'flex',
        alignItems:'center',
        width:'100%',
        height:'auto',
        justifySelf:"center"
    }}> 
<Card sx={{
    width:'40%',
    display:'flex',
    alignItems:'center',
    flexDirection:'column',
    padding:'50px 0',
   justifyContent:'center'
    
}}>
    <CardContent sx={{
        display:'flex',
        gap:'30px',
        flexDirection:'column',
    }}>
        <Typography>
            <FormControl>
                <InputLabel id="download_preference"> Download Quality</InputLabel>
                <Select labelId="download preferences" label="Download quality" sx={{
                    width:'200px'
                }}>
                    <MenuItem value="High">High</MenuItem>
                    <MenuItem value="Medium">Medium</MenuItem>
                    <MenuItem value="Low">Low</MenuItem>
                    
                </Select>
            </FormControl>
        </Typography>
        <FormControl>
        <TextField type='text' value='home/downloads'></TextField>
        <Button type='submit'>Browse</Button>
        </FormControl>
        
    </CardContent>
</Card>
    </Stack>
  )
}

export default Download