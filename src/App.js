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
import Header from './components/Header'
import HomePage from './HomePage';
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";


function App( ) {
const isDarkMode = useSelector(state => state.themeToggle.isDarkMode)
const currentUser = useSelector(state => state.user)
const [isSignUpShowing, setIsSignUpShowing] = useState(false)

function toggleSignUpClick(){
  setIsSignUpShowing((isSignUpShowing) => isSignUpShowing = !isSignUpShowing)
}


const colorMode = createTheme({
    palette: {
      mode: isDarkMode ? 'light' : 'dark',
    },
  });

// function AppInjet() {
//   return (
//     <Container>
//             <Container maxWidth="sm">
//               <Stack direction="row" spacing={2} className="header" sx={headerStyle}>
//                 <LogOut/>
//                   User: {currentUser.email}
//                 <ModeSwitch />
//               </Stack>
//               <Box sx={mainBody}>
//                 <Typography variant="h3">hello world</Typography>
//                 {isSignUpShowing ? <Login/> : <SignUp/> }
//                 <Button onClick={toggleSignUpClick} id="sign_up_toggle"> {isSignUpShowing ? "Sign up instead" : "Log in instead"}</Button>
//               </Box>
//             </Container>
//         </Container>
//   )
// }
  return (
    <div>
    <BrowserRouter>
      <ThemeProvider theme={colorMode} >
        <CssBaseline />
        <Header/>
        <Routes>
          <Route path="/" element={<HomePage/>}/>
        </Routes>
      </ThemeProvider>
    </BrowserRouter>
  </div>
  )
  
}

export default App;
