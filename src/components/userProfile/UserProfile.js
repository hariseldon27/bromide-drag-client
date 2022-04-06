import React from 'react'
import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';
import Container from '@mui/material/Container';
import { useDispatch, useSelector } from "react-redux"
import UserDetails from './UserDetails';
import UserGalleryList from './UserGalleryList';

function UserProfile() {
    const currentUser = useSelector(state => state.user)

  return (
    <Box>
        <Container>
          {currentUser.email}
            <UserDetails/>
            <UserGalleryList/>
        </Container>
    </Box>
  )
}

export default UserProfile