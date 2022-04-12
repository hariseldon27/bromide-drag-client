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
import UserProfile from './components/userProfile/UserProfile';
import { setCurrentUser } from "./reducers/userSlice"
import Paper from '@mui/material/Paper';
import Spinner from './components/Spinner';
import GalleryBuilder from './components/galleryBuilder/GalleryBuilder'
import GalleryPresentation from './components/galleryPresentation/GalleryPresentation'
import { showSpinner } from './reducers/spinnerSlice'


function App( ) {
  const dispatch = useDispatch()
  const isDarkMode = useSelector(state => state.themeToggle.isDarkMode)
  const currentUser = useSelector(state => state.user)
  const isSpinnerShowing = useSelector(state => state.spinner.isSpinnerShowing)

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
    dispatch(showSpinner());

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
          // console.log(data)
          // console.log(data.message)
          // console.log(data.user)
          dispatch(setCurrentUser({
            email: data.user.email,
            loggedIn: true,
            id: data.user.id,
            avatar: data.avatar ? data.avatar : '',
            token: currentToken
          }))
          dispatch(showSpinner());

        })

  }, [])
// console.log(currentUser)
const appMode = createTheme({
    palette: {
      mode: isDarkMode ? 'light' : 'dark',
    },
  });

  
const wrapperStyle = {
  background: isDarkMode ? "linear-gradient(25deg, #2A2B2B 0%, #C28686 290%)" : "linear-gradient(25deg, #2A2B2B 70%, #C28686 290%)",
  // background: "linear-gradient(25deg, #2A2B2B 0%, #C28686 290%)",
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
            <Paper elevation={24}>
              <Spinner/>
              <Header/>
              <Paper style={appPaper}>
                <Routes>
                  <Route  path="/" element={<HomePage/>}/>
                </Routes>
                <Routes>
                  <Route path="/profile" element={<UserProfile/>} />
                </Routes>
                <Routes>
                  <Route path="/gallery-builder" element={<GalleryBuilder/>} />
                </Routes>
                <Routes>
                  <Route path="/gallery-presentation" element={<GalleryPresentation/>} />
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
