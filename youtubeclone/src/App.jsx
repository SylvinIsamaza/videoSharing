import { useEffect, useState } from 'react';
import reactLogo from './assets/react.svg';
import './index.css';
import axios from 'axios';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Box } from '@mui/material';
import { Feed, VideoDetails, ChannelDetails, Navbar, SearchFeed, Sidebar, Signup,Login, UploadVideo } from './components';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import Profile from './components/Profile';

function App() {
  const [themes, setThemes] = useState('light');
  const changeThemes = () => {
    setThemes(themes === 'light' ? 'dark' : 'light');
  };

  const theme = createTheme({
    palette: {
      mode: themes,
      light: {
        background: '#fff',
        color: '#000',
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
    <div className="App">
      <BrowserRouter>
        <ThemeProvider theme={theme}>
          <Box sx={{ bgcolor: 'background.paper', position: 'sticky' }}>
           <Navbar changeThemes={changeThemes} inputThemes={themes} />
            <Routes>
              <Route path="/" element={<Feed inputThemes={themes} />} />
              <Route path="/video/:id" element={<VideoDetails />} />
              <Route path="/channels/:id" element={<ChannelDetails />} />
              <Route path="/search/:searchTerm" element={<SearchFeed />} />
              <Route path="/signup" element={<Signup  changeThemes={changeThemes}/>} />
              <Route path="/profile" element={<Profile />} />
              <Route path="/login" element={<Login  changeThemes={changeThemes}/>} />
              <Route path="/upload_video" element={<UploadVideo />} />
            </Routes>
          </Box>
        </ThemeProvider>
      </BrowserRouter>
    </div>
  );
}

export default App;
