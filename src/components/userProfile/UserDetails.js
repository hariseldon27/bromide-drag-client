import React from 'react'
import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import Divider from '@mui/material/Divider';
import Button from '@mui/material/Button';

import { useDispatch, useSelector } from "react-redux"

function UserDetails() {
    const currentUser = useSelector(state => state.user)

    const userDetailsStyle = {
        // border: "black dotted 1px",
        width: "15em",
        padding: "10px"
    }
// console.log(currentUser)

  return (
    <Container sx={userDetailsStyle} id="user_details_panel">
        <Stack spacing={1.5}>
            <Typography variant="h4" component="p" align="center">User Details</Typography>
            <img src={`http://localhost:3000/${currentUser.avatar}`}></img>
            <Divider textAlign="right"><span style={{color: "red"}}>{currentUser.email}</span></Divider>
            <Typography component="p" align="right"><b>Galleries:</b> 4</Typography>
            <Typography component="p" align="right"><b>Followers:</b> 3</Typography>
            <Typography component="p" align="right"><b>Following:</b> 2</Typography>
            <Button disabled variant="contained">Reset Password</Button>
            <Button disabled variant="contained">Delete Account</Button>
        </Stack>
    </Container>
  )
}

export default UserDetails