import { React, useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { Stack, Typography, AppBar, Card, CardContent, CardMedia, CssBaseline, Grid, Toolbar, Container, Box, Button, ButtonGroup } from '@mui/material';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import { CheckCircle, ChevronLeft, Search } from '@mui/icons-material';
import ChannelVideos from './ChannelVideos';
import { fetchFromApi } from '../utils/fetchDataApi';
import Sidebar from './Sidebar';

const YourChannel = () => {

  const { id } = useParams();
  const [channelDetails, setChannelDetails] = useState({});
  const [bannerImageUrl, setBannerImageUrl] = useState('');
  const [thumbnailUrl, setThumbnailUrl] = useState('');
  const [videoCount, setVideoCount] = useState(0);
  const [subscriberCount, setSubscribsignuperCount] = useState(0);
  const [subscriberDisplay,setSubscriberDisplay]=useState(subscriberCount)
  const[channelName,setChannelName] = useState("")
  useEffect(() => {
    const fetchData = async () => {
      const data = await fetchFromApi(`channels?part=snippet%2Cstatistics&id=${id}`)
      .then(async (data)=>{
        setChannelDetails(data);
        setBannerImageUrl(data?.items[0]?.brandingSettings?.image?.bannerExternalUrl || '');
        setThumbnailUrl(data?.items[0]?.snippet?.thumbnails?.high?.url || '');
        setVideoCount(data?.items[0]?.statistics?.videoCount || 0);
        setSubscriberCount(data?.items[0]?.statistics?.subscriberCount || 0)
        
        setChannelName(data?.items[0]?.snippet?.title||'')
        })
   
    return subscriberCount

    }
    

    fetchData()
    
    
   
    
   
 
   
  
  
 

  }, [id]);

console.log(channelDetails)


  return (
    <>
    <Box display='flex'>
   
    <Stack flexDirection="column" sx={{ justifyContent: 'center', alignItems: 'center' }} flex='1'>
      <Stack flexDirection={{ sx: 'column', md: 'row' }} sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', width: '100%' }}>
        <Card sx={{ width: '100%', display: 'flex', justifyContent: 'center', flexDirection: 'column' }}>
          <CardMedia component="img" image={bannerImageUrl} width='100%' height='300px' />
          <Card sx={{ display: 'flex', marginLeft:'10px'}} variant="text">
            <CardMedia component="img" image={thumbnailUrl} sx={{ width: '200px', height: '200px' }} />
            <CardContent>
              <Typography variant="h5" component="h2">
                {channelName} {subscriberCount>100000?<CheckCircle color="action" />:''}
              </Typography>
              <Box>
                <CardContent>
                  <Typography variant="body2" component="p">
                    {videoCount} videos
                  </Typography>
                  <Typography variant="body2" component="h2">
                
                    { subscriberCount>1000000 ? subscriberCount / 1000000 + "M"
    : subscriberCount > 1000
    ? subscriberCount / 1000 + "K"
    : subscriberCount} subscribers
                    
                  </Typography>
                </CardContent>
              </Box>
            </CardContent>
          </Card>
        </Card>
      </Stack>

      <ButtonGroup
        sx={{
          borderBottom: '3px solid rgba(255,255,255,1)',
          marginTop: '10px',
          width: '90%',
          overflow: 'scroll',
          justifyContent: 'center',
        }}
      >
        <Button sx={{ margin: '0px 30px', borderBottom: '2px solid rgba(0,0,0,0.8)', padding: '10px 40px' }} variant="text">
          Videos
        </Button>
      </ButtonGroup>
      <Box>
        <ChannelVideos
 id={id}/>
    </Box>
    </Stack>
    </Box>
    </>
  )
}

export default YourChannel