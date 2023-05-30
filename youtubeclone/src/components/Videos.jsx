import React from 'react'
import { Stack, Box } from '@mui/material'
import { VideoCard, ChannelCard } from './'

function Videos({ videos ,localVideos}) {
 console.log(videos);
  return (
    <Stack direction='row' flexWrap='wrap' justifyContent='start' gap='6'  sx={{
    
     margin:'0 3%'
    }}
    >
      {videos.map((item, idx) => (
        <Box key={idx} sx={{
        flex:1,
        
      }}>
        

        { item.id.videoId && <VideoCard video={item} /> }
        { item.id.channelId && <ChannelCard channelDetail={item} /> }
        </Box>
        
     ))}
       {localVideos.map((item, idx) => (
        <Box key={idx} sx={{
        flex:1
      }}>
        

        { item.id.videoId && <VideoCard video={item} /> }
        { item.id.channelId && <ChannelCard channelDetail={item} /> }
        </Box>
        
     ))}
    </Stack>
  )
}

export default Videos