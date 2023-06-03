import {createSlice} from '@reduxjs/toolkit';

const initialState = {
    // name:"",
    // id:"",
    // thumbnail:"",
    // channelId:"",
    // viewsCount:"",
    // subscribersCount:0,
    // loading:false
    videos: null,
    loading: false,
   
   
    error:false,
   
   

}
const videoSlice = createSlice({
    name: "videoSlice",
    initialState,
    reducers: {
        fetchStart: (state) => {
            state.loading = true
        },
        fetchSuccess: (state, action) => {
            state.video = action.payload
            state.loading = false
        },
        fetchFailure: (state) => {
            state.loading = false,
            state.error=true
        },
        likeIncrement: (state, action) => {
            if(!statevideo.likes.includes(action.payload)){
                state.video.likes=state.likes.push(action.payload)
                state.video.dislikes.splice((state.video.dislike.findIndex((userId)=>userId===action.payload)),1)
            }
           
        },
        likeDecrement: (state, action) => {
            state.video.likes.splice(state.video.likes.findIndex((userId)=>userId===action.payload),1)
            
        },
        dislikeIncrement: (state, action) => {
           if(!state.video.includes(action.payload)){
            state.video.dislike.push(action.payload);
            state.video.like.splice((state.video.findIndex((userId)=>userId===action.payload)))
           }
        },
        dislikeDecrement: (state, action) => {
            state.video.dislikes.splice(state.video.likes.findIndex((userId)=>userId===action.payload),1)
            
        },
        subscribe:(state,action)=>{
            if(!state.video.subscribe.includes(action.payload)){
                state.video.subscribers.push(action.payload)
            }
            
        },
        unsubscribe:(state,action)=>{
            if(state.video.subscribe.includes(action.payload)){
                state.video.subscribers.slice(state.video.subscriber.findIndex((userId)=>userId===action.payload),1)
            }
        }
    }
})

export const{fetchStart,fetchFailure,fetchSuccess,likeDecrement,likeIncrement,dislikeDecrement,dislikeIncrement,subscribe,unsubscribe}=videoSlice.actions
export default videoSlice.reducer