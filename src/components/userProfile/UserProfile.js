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
        direction="row"
        justifyContent="center"
        alignItems="center"
        >
          <Grid item
          xs={8}
          >
            <Paper>
              <GalleryPresentation />
            </Paper>
          </Grid>

          <Grid container 
          xs={4}
          gap={2}>
            <Paper>
              <UserDetails/>
              </Paper>
              <Paper>
              <UserAvatarUpload/>
            </Paper>
          </Grid>

        </Grid>
    </Box>
  )
}

export default UserProfile