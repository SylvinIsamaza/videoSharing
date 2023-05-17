import React from 'react'
import { Box ,Stack,Typography,Card, CardContent, CardMedia} from '@mui/material'
import { Padding } from '@mui/icons-material'
import { Link } from 'react-router-dom'

function VideoCard({video}) {
    return (
      
      <Link to={`/video/${video.id.videoId}`}>
   
      <Stack flexDirection={{ sx: 'column', md: 'row' }} sx={{flexWrap:'wrap'}}>
          
          <Card sx={{
                    maxWidth: '350px',
             
            height:'370px',
              borderRadius: '2px',
              margin: '7px 10px',
              right: '4px',
                    background: '#111',
              flex:1
             
             
          }} >
              
              <CardMedia
                  component='img'
                  image={video.snippet.thumbnails.high.url} 
               
                  title={video.snippet.title}
                // title={video.title}

                  sx={{
                      width:'400px',
                      height: '220px'
                      
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
                      color: '#fff',
                     
    
                  }} gutterBottom>
                  {video.snippet.title}
                {video.snippet.title}
                  
              </Typography>
                  <Typography variant='body2' color='textSecondary'
                      sx={{
                          color: '#e3e3e3',
                          opacity: '0.8',
                          margin:' 7px 0'
                  }}paragraph gutterBottom>
                  {video.snippet.channelTitle||''}
                  </Typography>
              </CardContent>
              </Card>
                  
      </Stack>
         </Link>
      
    
  )
}

export default VideoCard