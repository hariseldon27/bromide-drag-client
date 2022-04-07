import './App.css';
import React, { useState, useEffect } from 'react';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import { useSelector, useDispatch } from "react-redux"
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
import { setCurrentUser } from "./reducers/userSlice"



function App( ) {
  const dispatch = useDispatch()
  const isDarkMode = useSelector(state => state.themeToggle.isDarkMode)
  const currentUser = useSelector(state => state.user)
  const [isSignUpShowing, setIsSignUpShowing] = useState(false)

  function toggleSignUpClick(){
    setIsSignUpShowing((isSignUpShowing) => isSignUpShowing = !isSignUpShowing)
  }

  // useEffect(() =>{
  //   async function fetchUser(){
  //     const currentToken = localStorage.getItem("token")
  //     console.log(currentToken)
  //     const response = await fetch('http://localhost:3000/member-data', {
  //       method: "GET",
  //       headers: {
  //       "Content-Type": "application/json",
  //       "Authentication": currentToken
  //       }
  //   })

  //   const authUser = await response.json()
  //   console.log(authUser)
  //   // dispatch(setCurrentUser({
  //   //   authUser
  //   // }))
  // }
  // fetchUser()
  // }, [])


  useEffect(()=>{
    const currentToken = localStorage.getItem("token")
    console.log(currentToken)

    fetch('http://127.0.0.1:3000/member-data', {
            method: "GET",
            headers: {
            "Content-Type": "application/json",
            "Authorization": `Bearer ${currentToken}`
            }
        })
        .then((response) => response.json())
        .then((data) => {
          console.log(data)
          // console.log(data.message)
          // console.log(data.user)
          dispatch(setCurrentUser({
            email: data.user.email,
            loggedIn: true,
            avatar: `http://localhost:3000/${data.avatar}`
          }))
        })

  }, [])
console.log(currentUser)
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
