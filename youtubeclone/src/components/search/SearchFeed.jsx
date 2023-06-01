import React from 'react'
import { useParams } from 'react-router-dom'

import { useState,useEffect } from 'react'
import { Box, Stack } from '@mui/material'
import {Videos} from '../'

import { fetchFromApi, fetchFromLocalApi } from '../../utils/fetchDataApi'

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
        height:"100%",
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


