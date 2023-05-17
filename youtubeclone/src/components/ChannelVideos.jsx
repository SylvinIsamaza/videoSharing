import { Stack } from '@mui/system';
import React, { useState } from 'react'
import { useEffect } from 'react';
import { fetchFromApi } from '../utils/fetchDataApi';
import ChannelVideo from './ChannelVideo';
function ChannelVideos({id}) {
    const [channelVid,setChannelVid]=useState([]);
useEffect(()=>{
fetchFromApi(`search?channelId=${id}&part=snippet%2Cid&order=date&maxResults=50`)
.then((data)=>{
console.log(data)
setChannelVid(data.items)

})

},[id])

return(
    <Stack 
    sx={{
        flexDirection:{sx:'column',md:"row"},
        flexWrap:'wrap',
        width:'100%'
    
    }

        
        }
        >
            {channelVid.length>0?channelVid.map((vid)=><ChannelVideo video={vid}/>
):''}
    </Stack>
)



 
}

export default ChannelVideos