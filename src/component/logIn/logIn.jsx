import React from 'react'
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Link from '@mui/material/Link';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth, db } from '../../firebase';  
import { Navigate, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from 'react-redux';
import { LogInAction, setCurrentUser } from '../../redux/action/action';
import { onAuthStateChanged } from "firebase/auth";
import { useEffect } from 'react';
import { doc, getDoc, getDocs } from 'firebase/firestore';

const LogInForm = () => {
const dispatch = useDispatch();
const navigate = useNavigate();
const logInState = useSelector(state => state.loggedState)
if(logInState){
  navigate("/")
}

const get_user_by_id = async (uid) =>{
  const docRef = doc(db,"Students", uid.toString())
  return getDoc(docRef)
} 

    const handleSubmit = async (event) => {
        event.preventDefault();
        const data = new FormData(event.currentTarget);
        const info = {
          login: data.get('login'),
          password: data.get('password'),
        };
        try {
          await signInWithEmailAndPassword(auth, info.login + '@mail.com', info.password+'@mail.com').then(res =>{
            console.log(res.user.uid)
          })   
              dispatch(LogInAction())           
              navigate("/")
          }

          
          
        catch(error){
          console.log(error)
        }
      };

     

  return (
    <div>
      <Container component="main" maxWidth="xs">
        <CssBaseline />
        <Box
          sx={{
            marginTop: 8,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
          }}
        >
          <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
            <LockOutlinedIcon />
          </Avatar>
          <Typography component="h1" variant="h5">
            Sign in
          </Typography>
          <Box component="form" onSubmit={handleSubmit} noValidate sx={{ mt: 1 }}>
            <TextField
              margin="normal"
              required
              fullWidth
              id="login"
              label="login"
              name="login"
              autoComplete="login"
              autoFocus
            />
            <TextField
              margin="normal"
              required
              fullWidth
              name="password"
              label="Password"
              type="password"
              id="password"
              autoComplete="current-password"
            />
            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
            >
              Sign In
            </Button> 
          </Box>
        </Box>
      </Container>
    </div>
  )
}

export default LogInForm