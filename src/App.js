import './App.css';
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
import Header from './components/Header'
import HomePage from './HomePage';
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import { bromideMainTheme } from "./themes/bromideThemes"
import UserProfile from './components/userProfile/UserProfile';


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

  return (
    <div>
    <BrowserRouter>
      <CssBaseline />
      <ThemeProvider theme={colorMode} >
        
          <Header/>
          <Routes>
            <Route exact path="/" element={<HomePage/>}/>
          </Routes>
          <Routes>
            <Route path="/profile" element={<UserProfile/>} />
          </Routes>
        </ThemeProvider>
    </BrowserRouter>
  </div>
  )
  
}

export default App;
