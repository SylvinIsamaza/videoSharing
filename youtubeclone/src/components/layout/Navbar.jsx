import React, {useEffect, useState, useRef} from 'react'
import {
    ButtonGroup,
    Stack,
    Button,
    colors,
    IconButton,
    Card,
    Box,
    Typography,
    Dialog,
    TextField,
    FormControl,
    InputLabel
} from '@mui/material'
import {Link} from 'react-router-dom'
import {logo} from '../data/constants'
import Searchbar from './search/Searchbar'
import ModeNightIcon from '@mui/icons-material/ModeNight';
import ModeNightOutlinedIcon from '@mui/icons-material/ModeNightOutlined';
import Brightness6Icon from '@mui/icons-material/Brightness6';
import SettingsOutlinedIcon from '@mui/icons-material/SettingsOutlined';
import {Close, CloudUpload, Logout, UploadFile} from '@mui/icons-material'

import HelpOutlineOutlinedIcon from '@mui/icons-material/HelpOutlineOutlined';
import AccountBoxOutlinedIcon from '@mui/icons-material/AccountBoxOutlined';
import profilePic from '../assets/stylish-black-girl.jpg'
import Avatar from '@mui/material/Avatar';
import LightModeIcon from '@mui/icons-material/LightMode';


function Navbar({changeThemes, inputThemes, setThemes}) {
    const [show, setShow] = useState(false);
    const [open, setOPen] = useState(false)
    const [AppearanceOpen, setAppearanceOpen] = useState(false)
    const [showLeftSidebar, setShowLeftSidebar] = useState(false)


    const closeLeftSidebar = () => {
        setShowLeftSidebar(!showLeftSidebar)
    }
  
    const handleClose = () => {
        setOPen(false)
    }
    const handleOPen = () => {
        setOPen(true)
    }
    const handleAppearanceModal = () => {
        setAppearanceOpen(true)
    }
    const handleCloseAppear = () => {
        setAppearanceOpen(false)
    }
       
        
   



    return (
        <>
            <Stack direction='row' alignItems='center'
                p={2}
                sx={
                    {
                        position: 'sticky',
                        top: 0,
                        bgcolor: inputThemes == 'light' ? "#fff" : '#111',
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
                {
                < Searchbar inputThemes = {
                    inputThemes
                } />
            }
                <div style={
                    {
                        display: 'flex',
                        alignItems: 'center',
                        gap: '20px'
                    }
                }>
                    <Link to='/upload_video'>
                        <IconButton>
                            <CloudUpload></CloudUpload>
                        </IconButton>
                    </Link>
                    <IconButton onClick={
                        () => {
                            changeThemes();
                        }
                    }>
                        {
                        inputThemes == 'light' ? <ModeNightIcon/>: <LightModeIcon/>
                    } </IconButton>

                    <div className="profile_picture"
                        onClick={
                            () => {
                                setShowLeftSidebar(true)
                            }
                    }>
                        <Avatar alt="profile"
                            src={profilePic}
                            sx={
                                {
                                    width: '100%',
                                    height: '100%'
                                }
                            }/>
                    </div>
                </div>


            </Stack>

            <Dialog open={showLeftSidebar}
                onClose={closeLeftSidebar}
                fullWidth>
                <div id='ButtonGroup'>
                    <ButtonGroup variant="outlined" aria-label="outlined button group"
                        sx={
                            {

                                flexDirection: 'column',
                                position: 'fixed',
                                right: '20px',
                                top: '85px',
                                width: '300px',
                                height: "500px",
                                justifyContent: 'center',
                                backgroundColor: inputThemes == 'light' ? "#fff" : '#222',
                                color: inputThemes == 'light' ? "#000" : '#fff'
                            }

                        }

>
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
                                        color: inputThemes == 'light' ? "#000" : '#fff',
                                        width: '100%',
                                        margin: '5px 0',
                                        padding: '20px 0',
                                        textTransform: 'capitalize'
                                    }
                            }><Avatar alt="profile"
                                    src={profilePic}
                                    sx={
                                        {margin: '0 10px'}
                                    }/>Profile</Button>
                        </Link>
                        <Link to='/your_channel'
                            style={
                                {width: '100%'}
                        }>
                            <Button variant='text'
                                sx={
                                    {
                                        display: 'flex',
                                        alignItems: 'flex-start',
                                        justifyContent: 'flex-start',
                                        color: inputThemes == 'light' ? "#000" : '#fff',
                                        width: '100%',
                                        margin: '5px 0',
                                        padding: '20px 0',
                                        textTransform: 'capitalize'
                                    }
                            }    onClick={
                                () => {
                                    closeLeftSidebar()
                                }
                        }><AccountBoxOutlinedIcon sx={
                                    {padding: '5px 20px'}
                                }/>
                                Your channel</Button>
                        </Link>


                        <Button variant='text'
                            sx={
                                {
                                    display: 'flex',
                                    alignItems: 'center',
                                    justifyContent: 'flex-start',
                                    gap: '2px',
                                    color: inputThemes == 'light' ? "#000" : '#fff',
                                    width: '100%',
                                    margin: '5px 0',
                                    padding: '20px 0',
                                    textTransform: 'capitalize'
                                }
                            }
                            onClick={handleAppearanceModal}>

                            {
                            inputThemes == 'light' ? <ModeNightIcon sx={
                                {padding: '5px 20px'}
                            }/> : <LightModeIcon sx={
                                {padding: '5px 20px'}
                            }/>
                        }appearance</Button>

                        <Dialog open={AppearanceOpen}
                            onClose={handleCloseAppear}
                            fullWidth>
                            <Card sx={
                                {

                                    width: '100%',
                                    zIndex: 3,
                                    display: 'flex',
                                    flexDirection: 'column'
                                }

                            }>
                                <Box variant='text'
                                    sx={
                                        {
                                            display: 'flex',
                                            justifyContent: 'flex-end'
                                        }
                                    }
                                    onClick={
                                        () => {
                                            handleCloseAppear()
                                        
                                        }
                                }>
                                    <IconButton>
                                        <Close></Close>
                                    </IconButton>
                                </Box>

                                <ButtonGroup sx={
                                    {
                                        display: "flex",
                                        flexDirection: 'column',
                                        width: '100%'
                                    }
                                }>
                                    <Button variant='text'
                                        sx={
                                            {
                                                display: 'flex',
                                                alignItems: 'center',
                                                justifyContent: 'flex-start',
                                                gap: '2px',
                                                color: inputThemes == 'light' ? "#000" : '#fff',
                                                width: '100%',
                                                margin: '5px 0',
                                                padding: '20px 0',
                                                textTransform: 'capitalize'
                                            }
                                        }
                                        onClick={
                                            () => {
                                                setThemes('dark')
                                                handleCloseAppear()
                                            
                                            }
                                    }>

                                        {
                                        < ModeNightIcon sx = {
                                            {
                                                padding: '5px 20px'
                                            }
                                        } />
                                    }Dark mode</Button>
                                    <Button variant='text'
                                        sx={
                                            {
                                                display: 'flex',
                                                alignItems: 'center',
                                                justifyContent: 'flex-start',
                                                gap: '2px',
                                                color: inputThemes == 'light' ? "#000" : '#fff',
                                                width: '100%',
                                                margin: '5px 0',
                                                padding: '20px 0',
                                                textTransform: 'capitalize'
                                            }
                                        }
                                        onClick={
                                            () => {
                                                setThemes('light')
                                                handleCloseAppear()
                                                
                                            }
                                    }>

                                        <LightModeIcon sx={
                                            {padding: '5px 20px'}
                                        }/>
                                        Light mode</Button>

                                </ButtonGroup>

                            </Card>
                        </Dialog>
                        <Link to='/settings'
                            style={
                                {width: "100%"}
                        }>
                            <Button variant='text'
                                sx={
                                    {
                                        display: 'flex',
                                        alignItems: 'center',
                                        justifyContent: 'flex-start',
                                        gap: '2px',
                                        color: inputThemes == 'light' ? "#000" : '#fff',
                                        width: '100%',
                                        margin: '5px 0',
                                        padding: '20px 0',
                                        textTransform: 'capitalize'
                                    }
                            }    onClick={
                                () => {
                                    closeLeftSidebar()
                                }
                        }>
                                <SettingsOutlinedIcon sx={
                                    {padding: '5px 20px'}
                                }></SettingsOutlinedIcon>Setting</Button>
                        </Link>
                        <Link to="/signup"
                            style={
                                {width: '100%'}
                        }>
                            <Button variant='text'
                                sx={
                                    {
                                        display: 'flex',
                                        alignItems: 'center',
                                        justifyContent: 'flex-start',
                                        gap: '2px',
                                        color: inputThemes == 'light' ? "#000" : '#fff',
                                        width: '100%',
                                        margin: '5px 0',
                                        padding: '20px 0',
                                        textTransform: 'capitalize'
                                    }
                            }    onClick={
                                () => {
                                    closeLeftSidebar()
                                }
                        }>

                                <Logout sx={
                                    {padding: '5px 20px'}
                                }></Logout>signout</Button>
                        </Link>
                        <Button variant='text'
                            sx={
                                {
                                    display: 'flex',
                                    alignItems: 'center',
                                    justifyContent: 'flex-start',
                                    color: inputThemes == 'light' ? "#000" : '#fff',
                                    width: '100%',
                                    margin: '5px 0',
                                    padding: '20px 0',
                                    textTransform: 'capitalize'
                                }
                            }
                            onClick={handleOPen}><HelpOutlineOutlinedIcon sx={
                                {padding: '5px 20px'}
                            }/>help</Button>
                    </ButtonGroup>
                </div>
                <Dialog open={open}
                    onClose={handleClose}
                    fullWidth>
                    <Card sx={
                        {
                            padding: '20px',
                            display: 'flex',
                            flexDirection: 'column',
                            alignItems: 'center',
                            justifyContent: 'center',
                            gap: '40px'
                        }
                    }>
                        <Box variant='text'
                            sx={
                                {
                                    display: 'flex',
                                    justifyContent: 'flex-end',
                                    width: '100%'
                                }
                            }
                            onClick={handleClose}>
                            <IconButton>
                                <Close></Close>
                            </IconButton>
                        </Box>
                        <Typography variant='h6'>
                            Feedback
                        </Typography>
                        <FormControl>

                            <TextField type='text' label="Feedback"
                                sx={
                                    {
                                        width: {
                                            md: '500px',
                                            sm: '100%'
                                        }
                                    }
                            }></TextField>
                        </FormControl>

                        <Button type='submit'
                            onClick={handleClose}
                            variant='contained'>
                            submit
                        </Button>


                    </Card>
                </Dialog>
            </Dialog>

        </>
    )
}

export default Navbar
