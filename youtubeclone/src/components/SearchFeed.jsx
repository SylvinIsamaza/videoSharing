import React from 'react'
import { useParams } from 'react-router-dom'

import { useState,useEffect } from 'react'
import { Box, Stack, Typography } from '@mui/material'
import {Sidebar,Videos} from './'

import { fetchFromApi, fetchFromLocalApi } from '../utils/fetchDataApi'

  function SearchFeed({inputThemes}) {  
    const {searchTerm}=useParams()

    const[dataFromLocalApi,setDataFromLocalApi] = useState("")
    const[video,setVideos]=useState([])
    const[localVideo,setLocalVideo]=useState([])
    useEffect(() => {
      fetchFromLocalApi('api/videos/random')
  .then(data=>{
    setLocalVideo(data)
  })
      fetchFromApi(`search?part=snippet&q=${searchTerm}`)
        .then((data) => {
          setVideos(data.items)
          
          
        })
        .catch((e) => {
        console.log(e)
      })
  
    }, [searchTerm])
    // console.log(video)
    console.log(localVideo)
    return (
      <Stack sx={{
        flexDirection:{sm:'column',md:"row"},justifySelf:'center',}}>
      
        <Box sx={{
          overflowY:'scroll',
          maxHeight:'100%'
        }}>
         
          <Videos videos={video} localVideos={localVideo}  />
        </Box>
     </Stack>
    )
  }
    
  export default SearchFeed


