import './App.css';
import React, { useState, useEffect } from 'react';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import { useSelector, useDispatch } from "react-redux"
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
import Paper from '@mui/material/Paper';




function App( ) {
  const dispatch = useDispatch()
  const isDarkMode = useSelector(state => state.themeToggle.isDarkMode)
  const currentUser = useSelector(state => state.user)

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
    
    console.log("local storage token: ", currentToken)

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
            id: data.user.id,
            avatar: data.avatar ? data.avatar : '',
            token: currentToken
          }))
        })

  }, [])
console.log(currentUser)
const appMode = createTheme({
    palette: {
      mode: isDarkMode ? 'light' : 'dark',
    },
  });

  
const wrapperStyle = {
  background: "linear-gradient(25deg, #2A2B2B 0%, #C28686 290%)",
  minWidth: "100%",
  minHeight: "100vh",
  display: "flex",
  flexDirection: "column",
  justifyContent: "center"
}
const appPaper = {
  padding: "2em"
}
  return (
    <div id="app">
      <Container style={wrapperStyle} id="app-wrapper">
        <BrowserRouter>
          <CssBaseline />
          <ThemeProvider theme={appMode} >
            <Paper elevation={4}>
            <Header/>
            <Paper style={appPaper}>
              <Routes>
                <Route exact path="/" element={<HomePage/>}/>
              </Routes>
              <Routes>
                <Route exact path="/profile" element={<UserProfile/>} />
              </Routes>
            </Paper>
            </Paper>
            </ThemeProvider>
        </BrowserRouter>
      </Container>
    </div>
  )
  
}

export default App;
