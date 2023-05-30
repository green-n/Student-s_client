import React from 'react'
import  { AppBar, Toolbar, Typography, IconButton } from '@mui/material'
import MenuIcon from '@mui/icons-material/Menu';
import { useState } from 'react';
import Sidebar from './sidebar';
import { useSelector, useDispatch } from 'react-redux';
import { LogOutAction, sideBarToggleState } from '../../redux/action/action';
import { signOut } from 'firebase/auth';
import { auth } from '../../firebase';


const TopBar = () => {
const dispatch = useDispatch();

const handleSidebarToggle = () => {
    dispatch(sideBarToggleState());
  };

const handleClick =()=>{
  signOut(auth).then(()=>{
    dispatch(LogOutAction())
  })
}
  return (
    <>
     <AppBar position="static">
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
            onClick={handleSidebarToggle}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            Личный кабинет
          </Typography>
          < Typography variant="h6" component="div" onClick={handleClick}>
            выйти
          </Typography>
        </Toolbar>
      </AppBar>
      <Sidebar />
    </>
  )
}

export default TopBar