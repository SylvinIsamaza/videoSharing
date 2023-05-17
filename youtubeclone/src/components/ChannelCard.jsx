import React from 'react'
import { Card, CardContent, CardMedia, Stack, Typography } from '@mui/material'
import {Link } from 'react-router-dom'
import {ChannelDetails} from './'
function ChannelCard({ channelDetail }) {
    // const BASE_URL = 'https://youtube-v31.p.rapidapi.com'
    return (
        <>
            <Link to={`/channels/${channelDetail.id.channelId}`}>
      <Stack flexDirection={{ sx: 'column', md: 'row' }}>

          <Card sx={{
              maxWidth: '400px',
              height: '370px',
              borderRadius: '2px',
              margin: '7px 15px',
              right: '4px',
              background: '#111',
              display: 'flex',
              flexDirection:'column',
              alignItems: 'center',
              justifyContent:'center'


          }} >

              <CardMedia
                  component='image'
                  image={channelDetail.snippet.thumbnails.high.url} title={channelDetail.snippet.title}
                  alt={channelDetail.snippet.title}
                  sx={{
                      width: '200px',
                      height: '200px',
                      borderRadius:'50%'
                    

                  }}
              >

              </CardMedia>
              <CardContent sx={{
                  maxHeight: '100px',
                  width: '400px',

              }}>
                  <Typography variant='body2' p={4} component='p' sx={{
                      fontSize: '16px',
                      maxHeight: '17px',
                      overflow: 'hidden',
                      color: '#fff',
                      display: 'flex',
                      flexDirection: 'column',
                      alignItems: 'center',
                      justifyContent: 'center'


                  }} gutterBottom>
                      {channelDetail.snippet.title}

                  </Typography>
                 
              </CardContent>
          </Card>

            </Stack>
            </Link>
           
        </>
        
  )
}

export default ChannelCard