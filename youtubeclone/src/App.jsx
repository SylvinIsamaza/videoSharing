import { useEffect, useState } from 'react';
import reactLogo from './assets/react.svg';
import './index.css';
import axios from 'axios';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Box, Stack } from '@mui/material';
import { Feed, VideoDetails, ChannelDetails, Navbar, SearchFeed, Sidebar, Signup,Login, UploadVideo, YourChannel,Settings } from './components';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import Profile from './components/Profile';
import { createPortal } from 'react-dom';

import { ReactDOM } from 'react';

function App() {
  const [showNavbar,setShowNavbar]=useState(true);
  const [themes, setThemes] = useState('light');
  const changeThemes = () => {
    setThemes(themes === 'light' ? 'dark' : 'light');
  };
const showNavigation=()=>{
  if(window.location.href=="http://localhost:5173/signup"||window.location.href=="http://localhost:5173/login"){
    setShowNavbar(false)
  }
  else{
    setShowNavbar(true)
  }
}
  const theme = createTheme({
    palette: {
      mode: themes,
      light: {
        background: '#fff',
        color: '#000',
        text:{
          color: '#000',
        }
      },
      dark: {
        background: '#000',
        color: '#fff',
        text: {
          color: '#fff',
        },
      },
    },
  });


  return (
    <ThemeProvider theme={theme}>
      <BrowserRouter>
    <Stack flexDirection='column' sx={{
      width:'100%',
     height:'100vh',
    
     
     
     
      
      
    }}>
      
      
      
        
          <Box sx={{ bgcolor: 'background.paper', position: 'sticky' ,height:'100%'}}>
          {showNavbar&&<Navbar changeThemes={changeThemes} inputThemes={themes}  setThemes={setThemes}/>} 
            <Routes>
              <Route path="/" element={<Feed inputThemes={themes} showNavigation={showNavigation}/>} />
              <Route path="/video/:id" element={<VideoDetails />} showNavigation={showNavigation} />
              <Route path="/channels/:id" element={<ChannelDetails  showNavigation={showNavigation}/>} />
              <Route path="/search/:searchTerm" element={<SearchFeed  showNavigation={showNavigation}/>} />
              <Route path="/signup" element={<Signup  changeThemes={changeThemes} showNavigation={showNavigation}/>} />
              <Route path="/profile" element={<Profile showNavigation={showNavigation}/>} />
              <Route path="/login" element={<Login  changeThemes={changeThemes} showNavigation={showNavigation} setThemes={setThemes}/>} />
              <Route path="/upload_video" element={<UploadVideo showNavigation={showNavigation}/>} />
              <Route path="/your_channel" element={<YourChannel showNavigation={showNavigation}/>} />
              <Route path="/settings" element={<Settings changeThemes={changeThemes}  setThemes={setThemes} theme={themes}/>} />
            </Routes>
          </Box>
       
    
    </Stack>
    </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;
