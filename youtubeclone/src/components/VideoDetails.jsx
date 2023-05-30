import React, { useEffect, useState } from 'react'
import { Button, Card, CardContent, CardMedia, Stack, Typography, Box } from '@mui/material'
import ReactPlayer from 'react-player'
import '../index.css'
import { useParams } from 'react-router-dom'
import { fetchFromApi } from '../utils/fetchDataApi'
import {CommentCard} from'./'
import {useTheme} from '@mui/material'
import { Link } from 'react-router-dom'
const VideoDetails = () => {
  const theme=useTheme()
  const { id } = useParams();
  console.log(id)
  let[videoDetails,setVideoDetails]=useState([])
 const [relatedVideos, setRelatedVideos] = useState([])
 const [relatedVideosId, setRelatedVideosId] = useState([])
const [relatedVideoDetails,setRelatedVideoDetails]=useState([])

  const [channelDetails, setChannelDetails] = useState({});

  const [thumbnailUrl, setThumbnailUrl] = useState('');

  const [subscriberCount, setSubscriberCount] = useState('');
  const [subscriberDisplay,setSubscriberDisplay]=useState(subscriberCount)

  // const[channel,setChannel]=useState("")
  // console.log(id)
  let channelId;
  useEffect(() => {
    fetchFromApi(`videos?id=${id}`)
      .then(async (data) => {
        setVideoDetails(data.items[0])
       channelId=await data?.items[0]?.snippet.channelId||'';
        const fetchData = async () => {
          const data = await fetchFromApi(`channels?part=snippet%2Cstatistics&id=${channelId}`)
      
            setThumbnailUrl(data?.items[0]?.snippet?.thumbnails?.high?.url || '');
            
            setSubscriberCount(data?.items[0]?.statistics?.subscriberCount || 0);
         
          
        };
       
        fetchData()
        
     
    fetchFromApi(`search?relatedToVideoId=${id}&part=id%2Csnippet&type=video`)
      .then(async(data) => {
        setRelatedVideos(data.items)
       
        // console.log(relatedVideos[0].id);
      
      
      //  await fetchFromApi(`videos?id=${relatedVideos.id}`)
      //     .then((data) => {
      //       setRelatedVideoDetails(data.items)
      //       console.log(relatedVideoDetails)

      //     }
          // )
        // console.log(relatedVideos)
      })
      // console.log(relatedVideos)
      
    
  
  },[id,channelId])

  if(subscriberCount>1000000){
    setSubscriberDisplay(subscriberCount/1000000+"M")
  }
  else if(subscriberCount>1000){
    setSubscriberDisplay(subscriberCount/1000+"K")
  }
  
  else{
    setSubscriberDisplay(subscriberCount)
  }
  
})
  
  // console.log(videoDetails)
  console.log(channelId)
  console.log(thumbnailUrl)
  console.log('this si subscriber display '+subscriberDisplay)

  
  return (
    <Stack flexDirection={{
      sx: 'column', md: 'row'
    }}
      sx={
        {
          display: "flex",

        }

      }>
      <Box sx={{
        width: '100%',
        bottom: '1px'
      }}>
        <ReactPlayer className='react-player' url={`https://youtu.be/${id}`} controls />
        <Typography variant='subtitle2' component='h2' sx={{
         }}>
          {videoDetails?.snippet?.title}
        </Typography>
        <Card variant='text'>
          <Card sx={{
            display: 'flex',
            flexDirection: 'row',
            alignItems: 'center',
           

          }} variant='text'>
            <CardMedia
              component='img'
               image={thumbnailUrl}
            
               alt='channel'
              sx={{
                maxWidth: '50px',
                maxHeight: '50px',
                borderRadius:'50%'

              }}
            >

            </CardMedia>
            <Typography sx={{
              display:'flex',
              justifyContent:'space-between',
              alignItems:'self-start',
              width:'200px'
            }}>

            <Link to={`/channels/${channelId}`}>
            <Typography variant='body2' component='p'>
              {videoDetails?.snippet?.channelTitle}
            </Typography>
            </Link>
            <Typography variant='body2' component='p'  sx={{
              fontWeight:'bold',
            }}>
              {/* {subscriberCount&&parseInt(subscriberCount)>=1000&&parseInt(subscriberCount)>0?subscriberCount/1000+"k subscribers":subscriberCount+"subscribers"} */}

{subscriberDisplay}            </Typography>
            </Typography>
            </Card>

            <Card variant='text' sx={{
              display: 'flex',
              flexDirection: 'row',
              flex: 1,
              justifyContent:'flex-end'


            }}>
              <Typography variant='body2' component='p' mt={1} pr={4}>
                {videoDetails?.statistics?.viewCount} Views
              </Typography>
              <Typography variant='body2' component='p' mt={1}>
                {videoDetails?.statistics?.likeCount} Likes
              </Typography>
            </Card>
          </Card>
          
          <Card sx={{
           [theme.breakpoints.down('sm')]: {
            display: 'none',
          },
          }} id='comments'> 
            <CommentCard id={id} />
          </Card>

       
        <Button sx={{
         backgroundColor:'white',
          margin:'3px',
          [theme.breakpoints.up('md')]:{
            display:'none',

          }
        }} onClick={()=>{
          const card=document.getElementById('comments')
          card.style.display='block'
        }}>comments</Button>
      </Box>

      <Stack direction='column' sx={{
        width: { sx: '100%', md: '48%' },
        display: 'flex',
      }}
      >

        

            {relatedVideos?.map(video => {
            
              return (
                <Link to={`/video/${video.id.videoId}`}> <Card sx={{
                  height: '150px',
                  display: 'flex'
                }} key={video.id}>
                  <CardMedia
                    component='img'
                  image={video?.snippet.thumbnails?.high.url}
                    sx={{
                      height: '100%',
                      width: '70%',
                      maxWidth: '250px'
                    }}
                  >
                  </CardMedia>
                  <CardContent sx={{
                    display: 'flex',
                    flexDirection: 'column',
                    flex: 1
                  }}>
                    <Typography variant='body2' paragraph component='h6'>
                      {video?.snippet?.title}

                    </Typography>
                    <Typography variant='body2' paragraph component='p'>
                      {video?.snippet?.channelTitle}

                    </Typography>
                    <Typography variant='body2' paragraph component='p'>
                      {/* {video?.statistics?.viewCount||0} views */}
                      {async()=>{
                          await  fetchFromApi(`videos?id=${video?.id.videoId}`)
                           .then(async (data) => {
                            console.log(data)
                           })
                      }}
                    </Typography>
                  </CardContent>


                </Card>
                </Link>
        )
            })}
      
      





      </Stack>





    </Stack>
  )
}

export default VideoDetails