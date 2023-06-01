import React, { useEffect,useState } from 'react'
import { fetchFromApi } from '../../utils/fetchDataApi'
import Comment from './Comment'

const CommentCard = ({ id }) => {
  const [comment, setComment] = useState([])







    useEffect(() => {

     const fetchData=async ()=>{
     await fetchFromApi(`commentThreads?videoId=${id}&maxResults=100`)
      .then((data) => {
          setComment(data.items)
          
        
      })
     }  
     fetchData()
    
      
      // const url = 'https://youtube-v31.p.rapidapi.com/';

    },[])
    // console.log(comment)
    // console.log(channelDetail)
  return (
     comment&&comment.map((comm,idx) => {
          return (<Comment  key={idx} comment={comm} />)
    })
  )
}

export default CommentCard