import {createSlice} from '@reduxjs/toolkit';

const initialState={

    comment:null,
    loading:false

}
const videoSlice=createSlice({
    name:"commentSlice",
    initialState,
    reducers:{
        fetchStart:(state)=>{
            state.loading=true
        },
        fetchSuccess:(state,action)=>{
            state.comment=action.payload
            state.loading=false
        },
        fetchFailure:(state)=>{
            state.loading=false
        }
    }
})
