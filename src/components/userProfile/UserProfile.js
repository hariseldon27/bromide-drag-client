import React, { useState, useEffect } from 'react'
import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import { useDispatch, useSelector } from "react-redux"
import Paper from '@mui/material/Paper';
import Collapse from '@mui/material/Collapse';

import UserDetails from './UserDetails';
import UserGalleryList from './UserGalleryList';
import UserAvatarUpload from './UserAvatarUpload';
import GalleryPresentation from '../galleryPresentation/GalleryPresentation'

import Link from '@mui/material/Link';



function UserProfile() {
  const [uploaderShowing, setUploaderShowing] = useState(false)
    const preventDefault = (event) => event.preventDefault();
    const currentUser = useSelector(state => state.user)

    const mainContainerStyle = {

     }

     function handleToggleUploader(){
       setUploaderShowing((uploaderShowing) => uploaderShowing = !uploaderShowing)
     }

     useEffect(() => {
      currentUser.avatar ? setUploaderShowing(false) : setUploaderShowing(true)
     }, [])

  return (
    <Box sx={{flexGrow: 1}}>
        <Grid 
        container spacing={2} 
        style={mainContainerStyle}
        direction="row-reverse"
        justifyContent="center"
        >
          
          <Grid item xs={12} sm={12} md={4}>
            <Grid container 
            direction="row"
            justifyContent="center"
            gap={2}>
              <Grid item >
                <Paper>
                  <UserDetails/>
                </Paper>
              </Grid>
              <Grid item >
                <Paper>
                  {/* has avatar: hide upload boxes, show link to  expand upload button to patch*/}
                  {/* no avatar: show upload boxes */}
                  <Link sx={{color:"lightblue"}} underline="hover" onClick={handleToggleUploader}>{currentUser.avatar ? "upload new image?" : "collapse..."}</Link>
                  <Collapse in={uploaderShowing}>
                    <UserAvatarUpload/>
                  </Collapse>
                </Paper>
              </Grid>
            </Grid>
          </Grid>
          <Grid item xs={12} sm={12} md={8}>
            <Paper>
              <GalleryPresentation />
            </Paper>
          </Grid>
        </Grid>
    </Box>
  )
}

export default UserProfile