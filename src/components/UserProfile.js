import React from 'react'
import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';
import { useDispatch, useSelector } from "react-redux"

function UserProfile() {
    const currentUser = useSelector(state => state.user)

  return (
    <Box>

    </Box>
  )
}

export default UserProfile