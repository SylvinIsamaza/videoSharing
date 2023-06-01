import { Card, CardContent, CardMedia, Typography } from '@mui/material';
import React, { useEffect ,useState } from 'react';
import { fetchFromApi } from '../../utils/fetchDataApi';

const Comment = ({ comment }) => {
  const [channelDetail, setChannelDetails] = useState({});
  const [thumbnailUrl, setThumbnailUrl] = useState('');

  useEffect(() => {
    const fetchChannelData = async () => {
      try {
        const data = await fetchFromApi(`channels?part=snippet%2Cstatistics&id=${comment.snippet.topLevelComment.snippet.authorChannelId.value}`)
       .then((data)=>{
        setChannelDetails(data);
        setThumbnailUrl(data?.items[0]?.snippet?.thumbnails?.high?.url || '');
       }) 
      
      } catch (error) {
        console.error('Error fetching channel data', error);
      }
    };
    fetchChannelData();
  }, []);
// console.log(thumbnailUrl)
// console.log(channelDetail)
// console.log(comment)
  return (
    <Card sx={{
      display:'flex',
      alignItems:'center'
    }}>
      <CardMedia component='img'
      image={thumbnailUrl}
      sx={{
        width:'40px',
        height:'40px',
        borderRadius:'50%'
      }}
      >
      </CardMedia>
      <CardContent sx={{ maxWidth: '80%' }}>
        <Typography variant='body2' component='p' sx={{ display: 'flex', fontWeight: 'bold' }}>
          {comment.snippet.topLevelComment.snippet.authorDisplayName}
        </Typography>
        <Typography variant='body2' component='p' sx={{ display: 'flex' }}>
          {comment.snippet.topLevelComment.snippet.textOriginal}
        </Typography>
      </CardContent>
    </Card>
  );
};

export default Comment;
