import React from 'react'
import { Box ,Stack,Typography,Card, CardContent, CardMedia} from '@mui/material'
import { Padding } from '@mui/icons-material'
import { Link } from 'react-router-dom'

function VideoCard({video}) {
    return (
      
      <Link to={`/video/${video.id.videoId}`}>
   
      <Stack flexDirection={{ sm: 'column', md: 'row' }} sx={{flexWrap:'wrap',flex:1}}  >
          
          <Card sx={{
                    maxWidth: '350px',
                    minWidth:'270px',
            height:'370px',
              borderRadius: '2px',
              margin: '7px 15px',
              right: '4px',
                    
              flex:1
             
             
          }} >
              
              <CardMedia
                  component='img'
                  image={video.snippet.thumbnails.high.url} 
               
                  title={video.snippet.title}
                // title={video.title}

                  sx={{
                      width:'100%',
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
                     
                     
    
                  }} gutterBottom>
                  {video.snippet.title}
                {video.snippet.title}
                  
              </Typography>
                  <Typography variant='body2' color='textSecondary'
                      sx={{
                         
                        
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