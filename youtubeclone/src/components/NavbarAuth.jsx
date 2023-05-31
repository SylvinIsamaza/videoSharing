import React, { useEffect ,useState} from 'react'
import {ButtonGroup, Stack, Button, colors, IconButton, Card} from '@mui/material'
import {Link} from 'react-router-dom'
import {logo} from '../utils/constants'
import Searchbar from './Searchbar'
import ModeNightIcon from '@mui/icons-material/ModeNight';
import ModeNightOutlinedIcon from '@mui/icons-material/ModeNightOutlined';
import Brightness6Icon from '@mui/icons-material/Brightness6';
import SettingsOutlinedIcon from '@mui/icons-material/SettingsOutlined';
import {Logout} from '@mui/icons-material'

import HelpOutlineOutlinedIcon from '@mui/icons-material/HelpOutlineOutlined';
import AccountBoxOutlinedIcon from '@mui/icons-material/AccountBoxOutlined';
import profilePic from '../assets/stylish-black-girl.jpg'
import Avatar from '@mui/material/Avatar';
import LightModeIcon from '@mui/icons-material/LightMode';

function NavbarAuth({changeThemes,inputThemes,setThemes}) {
    const [show, setShow] = useState(false);
   
  

    return (
        <>
            <Stack direction='row' alignItems='center'
                p={2}
                sx={
                    {
                        position: 'sticky',
                        top: 0,
                    
                        justifyContent: 'space-between',
                        
                    }
            }>
                <Link to='/'
                    style={
                        {
                            display: 'flex',
                            alignItems: 'center'
                        }
                }><img src={logo}
                        alt="logo"
                        height={45}/></Link>
              
                <div style={{display:'flex',alignItems:'center',gap:'20px'}}>
                  <IconButton onClick={()=>{
                    changeThemes();
                  }}>{inputThemes=='light'?<ModeNightIcon/>:<LightModeIcon/> }  </IconButton>
                  
                    <div className="profile_picture"
                    onClick={
                        () => {

                            const buttonGroup = document.querySelector('.ButtonGroup')
                            if (buttonGroup.style.display == 'none') {
                                buttonGroup.style.display = 'flex'
                                buttonGroup.style.alignItems = 'flex-start'
                            } else {
                                buttonGroup.style.display = 'none'
                            }

                        }
                }>
                     <Avatar alt="profile" src={profilePic}  sx={{
                        width:'100%',
                        height:'100%'
                     }}/>
                </div>
                </div>

              


            </Stack>


            
           

        </>
    )
}

export default NavbarAuth
