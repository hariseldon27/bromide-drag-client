import React from 'react'
import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import { useDispatch, useSelector } from "react-redux"
import Paper from '@mui/material/Paper';
import UserDetails from './UserDetails';
import UserGalleryList from './UserGalleryList';
import UserAvatarUpload from './UserAvatarUpload';
import GalleryPresentation from '../galleryPresentation/GalleryPresentation'

function UserProfile() {
    const currentUser = useSelector(state => state.user)

    const mainContainerStyle = {

     }

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
                  <UserAvatarUpload/>
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