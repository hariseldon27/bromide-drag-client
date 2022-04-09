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
import Paper from '@mui/material/Paper';
import { flexbox } from '@mui/system';
import Grid from '@mui/material/Grid';
import HomeFeatures from './components/homepage/HomeFeatures';


function HomePage() {
const [isSignUpShowing, setIsSignUpShowing] = useState(false)

function toggleSignUpClick(){
    setIsSignUpShowing((isSignUpShowing) => isSignUpShowing = !isSignUpShowing)
  }

const homeComponents = {
  padding: "1em"
}
  return (
     
    <Box sx={{flexGrow: 1}}>
      <Grid container
      gap={3}
      direction="row"
      justifyContent="center">
        <Grid item xs={12}>
          <Paper style={homeComponents}><Typography variant="h4" component="h1">bromide drag</Typography></Paper>
        </Grid>
        <Grid container
        spacing={1}
        direction="row">
          <Grid item xs={8}>
            <Paper style={homeComponents}>
              <HomeFeatures/>
            </Paper>
          </Grid>
          <Grid item xs={4}>
            <Paper style={homeComponents}>
              {isSignUpShowing ? <SignUp/> : <Login/> }
              <Button onClick={toggleSignUpClick} id="sign_up_toggle"> {isSignUpShowing ? "Sign up instead" : "Log in instead"}</Button>
            </Paper>
          </Grid>
        </Grid>
      </Grid>
    </Box>
  )
}

export default HomePage