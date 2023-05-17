import {useEffect, useState} from 'react'
import reactLogo from './assets/react.svg'
import './index.css'
import axios from 'axios'
import { BrowserRouter, Routes,Route} from 'react-router-dom'
import {Box} from "@mui/material";
import{Feed,VideoDetails,ChannelDetails,Navbar,SearchFeed, Sidebar}from './components'
function App() {
 
 
 

  return (
    <div className="App">
      <BrowserRouter>
        <Box sx={{
          backgroundColor: '#000',
      position:'sticky'  }}>
          <Navbar />
          <Routes>
            <Route path='/' element={<Feed />}></Route>
            <Route path='/video/:id' element={<VideoDetails />}></Route>
            <Route path='/channels/:id' element={<ChannelDetails />}></Route>
            <Route path='/search/:searchTerm' element={<SearchFeed />}></Route>
          </Routes>
        </Box>
      </BrowserRouter>
    
  </div>
  )
}
export default App