import './App.css';
import React, { useEffect } from 'react';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import Container from '@mui/material/Container';
import { useSelector, useDispatch } from "react-redux"
import Header from './components/Header'
import HomePage from './HomePage';
import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";
import UserProfile from './components/userProfile/UserProfile';
import { setCurrentUser } from "./reducers/userSlice"
import Paper from '@mui/material/Paper';
import Spinner from './components/Spinner';
import GalleryBuilder from './components/galleryBuilder/GalleryBuilder'
import GalleryPresentation from './components/galleryPresentation/GalleryPresentation'
import { showSpinner } from './reducers/spinnerSlice'
import { setError } from './reducers/errorSlice'
import ErrorHandler from './components/errorHandler/ErrorHandler';
// import GalleryShow from './components/galleryPresentation/GalleryShow';
import ShareViewer from './components/ShareViewer';
import NotFound from './components/NotFound';

function App( ) {
  const dispatch = useDispatch()
  const isDarkMode = useSelector(state => state.themeToggle.isDarkMode)
  // const currentUser = useSelector(state => state.user)
  // const isSpinnerShowing = useSelector(state => state.spinner.isSpinnerShowing)


  useEffect(()=>{
    dispatch(showSpinner());

    const currentToken = localStorage.getItem("token")
    
    // console.log("local storage token: ", currentToken)

    fetch('http://127.0.0.1:3000/member-data', {
            method: "GET",
            headers: {
            "Content-Type": "application/json",
            "Authorization": `Bearer ${currentToken}`
            }
        })
        .then((response) => {
          if (response.ok) {
            return response.json();
          }
          return Promise.reject(response)})
        .then((data) => {
          dispatch(setCurrentUser({
            email: data.user.email,
            loggedIn: true,
            id: data.user.id,
            avatar: data.avatar ? data.avatar : '',
            token: currentToken
          }))
          dispatch(showSpinner());
        })
        .catch((error) => {
          // console.log(error)
          renderUserError(error)
          dispatch(showSpinner())
        })
  }, [])

function renderUserError(error) {
  // console.log("error render", error)
  const newError = {
    text: error.statusText,
    occurred: true, 
    code: error.status
  }
  dispatch(setError(newError))
}

const appMode = createTheme({
      palette: {
        mode: isDarkMode ? 'light' : 'dark',
        grey: {
          main: "#666"
        },
        secondary: {
          main: '#6868ac',
        },
        lightblue: {
          main: '#aed8e6',
        },
        pink: {
          main : '#fec0ca'
        }
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
                  <Route path="/share/:id" element={<ShareViewer />}/>
                  <Route path="/profile" element={<UserProfile/>} />
                  <Route path="/gallery-builder" element={<GalleryBuilder/>} />
                  <Route path="/gallery-presentation" element={<GalleryPresentation/>} />
                  <Route path="*" element={<NotFound />} />
                </Routes>
              </Paper>
            </Paper>
            <ErrorHandler />
            </ThemeProvider>
        </BrowserRouter>
      </Container>
    </div>
  )
  
}

export default App;
