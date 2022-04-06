import React, { useState } from 'react';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import { useSelector } from "react-redux"
import Login from "./components/Login"
import SignUp from "./components/SignUp"
import LogOut from './components/LogOut';
import Stack from '@mui/material/Stack';

function HomePage() {
const [isSignUpShowing, setIsSignUpShowing] = useState(false)

function toggleSignUpClick(){
    setIsSignUpShowing((isSignUpShowing) => isSignUpShowing = !isSignUpShowing)
  }

    const mainBody = {
        maxWidth: "85%",
      }
  return (
     
    <Box sx={mainBody}>
        <Typography variant="h3">hello world</Typography>
            {isSignUpShowing ? <Login/> : <SignUp/> }
        <Button onClick={toggleSignUpClick} id="sign_up_toggle"> {isSignUpShowing ? "Sign up instead" : "Log in instead"}</Button>
    </Box>
  )
}

export default HomePage