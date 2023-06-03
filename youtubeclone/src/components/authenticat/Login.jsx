import { Button, Card, Stack, Typography } from '@mui/material';
import React, { useEffect, useState } from 'react';
import TextField from '@mui/material/TextField';
import { Link } from 'react-router-dom';
import axios from 'axios';
import { logo } from '../../data/constants';
import NavbarAuth from './NavbarAuth';

import { useSelector, useDispatch } from 'react-redux';
import { loginFailure,loginStart,loginSucces } from '../../redux/userState';

import { provider,auth } from '../../utils/firebase';
import{signInWithPopup}from 'firebase/auth'
import { Google } from '@mui/icons-material';

function Login({ inputThemes, showNavigation, changeThemes, setThemes }) {
  const baseUrl='http://localhost:8800'
  const dispatch = useDispatch();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  useEffect(() => {
    showNavigation();
  }, [window.location.href]);

  const handleSubmit = (e) => {
    e.preventDefault();

    dispatch(loginStart());
    axios
      .post(baseUrl + '/api/auth/signin', { email, password })
      .then((response) => {
        const data = response;
        console.log(data)
       if(data.status==200){
        return dispatch(loginSucces(data.data));
       }
         
        else{
          return dispatch(loginFailure())
        }
       
       
      })
      .catch((error) => {
        console.log('Error during login:', error);
        dispatch(loginFailure());
      });
  };
  function signInwithGoogle(){
    signInWithPopup(auth,provider)
    .then(result=>{
     axios.post('auth/google',{
      name:result.user.displayName,
      email:result.user.email,
      image:result.user.photoURL
     }
     

     ).then((data)=>{
      dispatch(loginSucces(data))
     })
    

    })
    .catch(err=>{
      console.log(err)
    })
  }

  return (
    <>
      <NavbarAuth changeThemes={changeThemes} setThemes={setThemes} />
      <Stack mt={20} width="100%" display="flex" alignItems="center" sx={{ zIndex: 3 }}>
        <Card sx={{ display: 'flex', alignItems: 'center', flexDirection: 'column', justifyContent: 'space-between', width: '400px' }}>
          <Typography variant="h2" component="p" sx={{ margin: '20px 0' }}>
            Login
          </Typography>
          <form method="POST" onSubmit={handleSubmit} style={{ display: 'flex', alignItems: 'center', flexDirection: 'column' }}>
            <TextField label="Enter your email" variant="outlined" type="email" name="email" sx={{ margin: '20px 0' }} onChange={(e) => setEmail(e.target.value)} />
            <TextField label="Password" variant="outlined" name="password" type="password" sx={{ margin: '20px 0' }} onChange={(e) => setPassword(e.target.value)} />
            <Typography sx={{ textAlign: 'end', width: '80%', display: 'flex', justifyContent: 'flex-end', gap: '7px' }}>
              <Link to="/" sx={{ color: '#0000ff', cursor: 'pointer', textDecoration: 'none' }}>
                Forgot Password?
              </Link>
            </Typography>
            <Button variant="contained" sx={{ margin: '20px 0' }} type="submit">
              Login
            </Button>
            <Typography>
              or
            </Typography>
            <Button variant='contained' onClick={signInwithGoogle}><Google></Google>Signin with Google</Button>
            <Typography sx={{ width: '80%', display: 'flex', alignItems: 'center', justifyContent: 'center', mb: '20px' }}>
              Don't have an account?{' '}
              <Link to="/signup" sx={{ color: '#0000ff', cursor: 'pointer', textDecoration: 'none' }}>
                Create an account
              </Link>
            </Typography>
          </form>
        </Card>
      </Stack>
    </>
  );
}

export default Login;
