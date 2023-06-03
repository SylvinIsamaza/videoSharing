import{configureStore} from '@reduxjs/toolkit'
import userReducer from './userState'
import videoReducer from './videoState'

const store=configureStore({
    reducer:{
        user:userReducer,
        videos:videoReducer
    }
})
export default store