import React from 'react'
import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import { useDispatch, useSelector } from "react-redux"
import { styled } from '@mui/material/styles';
import Paper from '@mui/material/Paper';
import UserDetails from './UserDetails';
import UserGalleryList from './UserGalleryList';
import UserAvatarUpload from './UserAvatarUpload';

function UserProfile() {
    const currentUser = useSelector(state => state.user)

    const mainContainerStyle = {
      border: "black solid .5px",
      padding: "3em",
      display: "flex",
      maxWidth: "60em",
      marginTop: "5vh",
      margin: "0 auto"
     }
     const Item = styled(Paper)(({ theme }) => ({
      backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
      ...theme.typography.body2,
      padding: theme.spacing(1),
      textAlign: 'center',
      color: theme.palette.text.secondary,
    }));
  return (
    <Box sx={{flexGrow: 1}}>
        <Grid 
        container spacing={1} 
        style={mainContainerStyle}
        direction="row"
        justifyContent="center"
        alignItems="center"
        >
          <Grid item xs={8}>
            <Item><UserGalleryList/></Item>
          </Grid>
          <Grid container item xs={4} >
            <Item><UserDetails/></Item>
            <Item><UserAvatarUpload/></Item>
          </Grid>
        </Grid>
    </Box>
  )
}

export default UserProfile