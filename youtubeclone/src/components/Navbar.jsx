import React from 'react'
import {ButtonGroup, Stack, Button, colors, IconButton} from '@mui/material'
import {Link} from 'react-router-dom'
import {logo} from '../utils/constants'
import Searchbar from './Searchbar'
import ModeNightIcon from '@mui/icons-material/ModeNight';
import ModeNightOutlinedIcon from '@mui/icons-material/ModeNightOutlined';
import Brightness6Icon from '@mui/icons-material/Brightness6';
import SettingsOutlinedIcon from '@mui/icons-material/SettingsOutlined';
import {Logout} from '@mui/icons-material'
import LightModeIcon from '@mui/icons-material/LightMode';
import HelpOutlineOutlinedIcon from '@mui/icons-material/HelpOutlineOutlined';
import AccountBoxOutlinedIcon from '@mui/icons-material/AccountBoxOutlined';
import profilePic from '../assets/stylish-black-girl.jpg'
import Avatar from '@mui/material/Avatar';
function Navbar() {
    return (
        <>
            <Stack direction='row' alignItems='center'
                p={2}
                sx={
                    {
                        position: 'sticky',
                        top: 0,
                        background: '#000',
                        justifyContent: 'space-between'
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
                <Searchbar/>
                <div style={{display:'flex',alignItems:'center',gap:'20px'}}>
                  <IconButton><ModeNightIcon sx={{color:'white'}}/></IconButton>
                  
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


            <ButtonGroup variant="outlined" aria-label="outlined button group"
                sx={
                    {
                        display: 'none',
                        flexDirection: 'column',
                        position: 'fixed',
                        right: '20px',
                        top: '85px',
                        width: '300px',
                        height: "500px",
                        justifyContent: 'center',
                        backgroundColor: '#222',
                        color: 'white'
                    }
                }
                className='ButtonGroup'>
                <Link to='/profile'
                    style={
                        {width: '100%'}
                }>
                    <Button variant='text'
                        sx={
                            {
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'flex-start',
                                color: 'white',
                                width: '100%',
                                margin: '5px 0',
                                padding: '20px 0',
                                textTransform: 'capitalize'
                            }
                    }><Avatar alt="profile" src={profilePic}  sx={{
                        margin:'0 10px'
                     }}/>Profile</Button>
                </Link>
                <Button variant='text'
                    sx={
                        {
                            display: 'flex',
                            alignItems: 'flex-start',
                            justifyContent: 'flex-start',
                            color: 'white',
                            width: '100%',
                            margin: '5px 0',
                            padding: '20px 0',
                            textTransform: 'capitalize'
                        }
                }><AccountBoxOutlinedIcon sx={
                  {padding: '5px 20px'}
                    }/>
                    Your channel</Button>
                <Button variant='text'
                    sx={
                        {
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'flex-start',
                            gap: '2px',
                            color: 'white',
                            width: '100%',
                            margin: '5px 0',
                            padding: '20px 0',
                            textTransform: 'capitalize'
                        }
                }>
                    <ModeNightOutlinedIcon sx={
                        {padding: '5px 20px'}
                    }></ModeNightOutlinedIcon>appearance</Button>
                <Button variant='text'
                    sx={
                        {
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'flex-start',
                            gap: '2px',
                            color: 'white',
                            width: '100%',
                            margin: '5px 0',
                            padding: '20px 0',
                            textTransform: 'capitalize'
                        }
                }>
                    <SettingsOutlinedIcon sx={
                        {padding: '5px 20px'}
                    }></SettingsOutlinedIcon>Setting</Button>
                <Button variant='text'
                    sx={
                        {
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'flex-start',
                            gap: '2px',
                            color: 'white',
                            width: '100%',
                            margin: '5px 0',
                            padding: '20px 0',
                            textTransform: 'capitalize'
                        }
                }>
                    <Logout sx={
                        {padding: '5px 20px'}
                    }></Logout>signout</Button>
                <Button variant='text'
                    sx={
                        {
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'flex-start',
                            color: 'white',
                            width: '100%',
                            margin: '5px 0',
                            padding: '20px 0',
                            textTransform: 'capitalize'
                        }
                }><HelpOutlineOutlinedIcon sx={
                  {padding: '5px 20px'}
                    }/>help</Button>
            </ButtonGroup>

        </>
    )
}

export default Navbar
