import React from 'react'
import { Box ,Stack,Typography,Card, CardContent, CardMedia} from '@mui/material'
import { Padding } from '@mui/icons-material'
import { Link } from 'react-router-dom'
import { useEffect } from 'react'
import { fetchFromApi } from '../utils/fetchDataApi'
import { useState } from 'react'


function ChannelVideo({video}) {
    const [videoStatistic,setVideoStatistics]=useState("")
useEffect(()=>{
fetchFromApi(`videos?id=${video.id.videoId}`)
.then((data)=>{
    setVideoStatistics(data)
    
   
})
    },[video])
    
    
    return (
      <Link to={`/video/${video.id.videoId}`}>
      <Stack flexDirection={{ sx: 'column', md: 'row' }} sx={{flexWrap:'wrap'}}>
          
          <Card sx={{
                    maxWidth: '300px',
              minWidth: '300px',
            height:'370px',
              borderRadius: '2px',
              margin: '7px 10px',
              right: '4px',
               
              flex:1
             
             
          }} >
              
              <CardMedia
                  component='img'
                  image={video.snippet.thumbnails.high.url} title={video.snippet.title} images
                  sx={{
                      Width:'300px',
                      height: '180px'
                      
                  }}
              >
                  
              </CardMedia>
              <CardContent sx={{
                  maxHeight:'100px',
                
              }}>
                  <Typography variant='body2' p={4}component='p' sx={{
                      fontSize: '16px',
                      maxHeight: '17px',
                      overflow: 'hidden',
                     
                    textAlign:'start'  ,

                     
    
                  }} gutterBottom>
                  {video.snippet.title} title
                  
              </Typography>
              <Typography  sx={{
                display:'flex',
                gap:'5px'


              }}>
                  <Typography variant='body2' color='textSecondary'
                      sx={{
                          
                          opacity: '0.8',
                          margin:' 7px 20px'
                  }}paragraph gutterBottom>
                  {video.snippet.channelTitle}
                  </Typography>
                
                  </Typography>
              </CardContent>
              </Card>
                  
      </Stack>
         </Link>
      
    
  )
}

export default ChannelVideo