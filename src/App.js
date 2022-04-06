import './App.css';
import React, { useState } from 'react';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import ModeSwitch from './components/ModeSwitch';
import CssBaseline from '@mui/material/CssBaseline';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import { useSelector } from "react-redux"
import Login from "./components/Login"
import SignUp from "./components/SignUp"
import LogOut from './components/LogOut';
import Stack from '@mui/material/Stack';


function App( ) {
const isDarkMode = useSelector(state => state.themeToggle.isDarkMode)
const [isSignUpShowing, setIsSignUpShowing] = useState(false)

function toggleSignUpClick(){
  setIsSignUpShowing((isSignUpShowing) => isSignUpShowing = !isSignUpShowing)
}


const colorMode = createTheme({
    palette: {
      mode: isDarkMode ? 'light' : 'dark',
    },
  });

const mainBody = {
  maxWidth: "85%",
}
  
const headerStyle = {
  maxHeight: "100px",
  backgroundColor: 'secondary.main'
}

  return (
    <div>
    <ThemeProvider theme={colorMode} >
      <CssBaseline />
      <Container>
          <Container maxWidth="sm">
            <Stack direction="row" spacing={2} className="header" sx={headerStyle}>
              <LogOut/>
              <ModeSwitch />
            </Stack>
            <Box sx={mainBody}>
              <Typography variant="h3">hello world</Typography>
              {isSignUpShowing ? <Login/> : <SignUp/> }
              <Button onClick={toggleSignUpClick} id="sign_up_toggle"> {isSignUpShowing ? "Sign up instead" : "Log in instead"}</Button>
            </Box>
          </Container>
      </Container>
    </ThemeProvider>
  </div>
  )
  
}

export default App;
