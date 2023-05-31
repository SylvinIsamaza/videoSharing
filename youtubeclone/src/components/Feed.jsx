import React from 'react'
import { useState,useEffect } from 'react'
import { Box, Stack, Typography } from '@mui/material'
import {Sidebar,Videos} from './'

import { fetchFromApi, fetchFromLocalApi } from '../utils/fetchDataApi'



function Feed({inputThemes}) {
  const [selectedCategory, setSelectedCategory] = useState('New')
  const[dataFromLocalApi,setDataFromLocalApi] = useState("")
  const[video,setVideos]=useState([])
  const[localVideo,setLocalVideo]=useState([])
  useEffect(() => {
    fetchFromLocalApi('api/videos/random')
.then(data=>{
  setLocalVideo(data)
})
    fetchFromApi(`search?part=snippet&q=${selectedCategory}`)
      .then((data) => {
        setVideos(data.items)
        
        
      })
      .catch((e) => {
      console.log(e)
    })

  }, [selectedCategory])
  // console.log(video)
  console.log(localVideo)
  return (
    <Stack sx={{
      flexDirection:{sm:'column',md:"row"},justifySelf:'center',
      height:'90dvh',overflow:'scroll'
      }}>
      <Box sx={{ height: { sx: 'auto', md: '92vh' }, borderRight: '1px solid #3d3d3d', px: { sx: 0, md: 2 },position:'sticky', top:'68px',} }>
        <Sidebar
          selectedCategory={selectedCategory}
          setSelectedCategory={setSelectedCategory}
          inputThemes={inputThemes}
        />
        <Typography className='copyright' variant='body2' sx={{mt:1.4,color:'#fff',}} >
          Copyright 2022 Isamaza Sylvain
        </Typography>
      </Box>
      <Box sx={{
        overflowY:'scroll',
        maxHeight:'100%'
      }}>
        <Typography variant='h4' fontWeight='bold' mb={2}  className={inputThemes=="light"?'light':'dark'} sx={{
          margin:'0 3%'
        }}>
          {selectedCategory}<span style={{color:'#F31503 '}}> videos</span>

        </Typography>
        <Videos videos={video} localVideos={localVideo}  />
      </Box>
   </Stack>
  )
}

export default Feed