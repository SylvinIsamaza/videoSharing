import { Card, FormControlLabel, FormGroup, Stack, Switch, Typography } from '@mui/material'
import React from 'react'


function Privacy() {
  return (
    <Stack sx={{
      display:"flex",
      flexDirection:"column",

     
      p:' 0 20px',
      height:'auto',
    
      
     
        }}>
        <Typography variant='h5' component='h4' textAlign='center'>
        Manage what you share and how to be shared 
        </Typography>
        <Card sx={{
          padding:"20px 10px"
        }}>
          <FormGroup>
              <FormControlLabel label="keep all my subscription private" control={<Switch></Switch>} >

            </FormControlLabel>
            <Typography ml='40px'>
              your subscription will not be visible to others and will be automatically removed when you turn this switch on
            </Typography>
          </FormGroup>
        </Card>
        <Card sx={{
          margin:'30px 0',
          padding:"20px 10px"
        }}>
          <FormGroup>
              <FormControlLabel label="Keep my playlist private" control={<Switch></Switch>} >

            </FormControlLabel>
            <Typography ml='40px'>
              your playlist will not be visible to others and will be automatically removed when you turn this switch on
            </Typography>
          </FormGroup>
        </Card>
    </Stack>
  )
}

export default Privacy