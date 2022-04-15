import React from 'react'
import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import Divider from '@mui/material/Divider';
import Button from '@mui/material/Button';
import Grid from '@mui/material/Grid';
import Avatar from '@mui/material/Avatar';



import { useDispatch, useSelector } from "react-redux"

function UserDetails() {
    const currentUser = useSelector(state => state.user)

    const userDetailsStyle = {
        // border: "black dotted 1px",
        padding: ".7em",
        margin: "0 auto",
        position: "relative",
        backgroundImage: `url(${currentUser.avatar})`,
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundBlendMode: "darken",
        textAlign: "center",
        display: "flex",
        

    }
    const lookOverlayLook = {
      backgroundColor: "rgba(168,229,255,.3)",      
    }

  return (

          <Box style={userDetailsStyle}>
            <Box style={lookOverlayLook}>
              <Grid container
              spacing={1}
              direction="column"
              justifyContent="center"
              alignItems="center"
              >
                <Grid item>
                  <Typography variant="h4" component="p" align="center">User Details</Typography>
                </Grid>
                <Grid item>
                  <Avatar sx={{height: 125, width: 125}} alt={currentUser.email} src={currentUser.avatar} />
                </Grid>
                <Grid item>
                  <Divider textAlign="right"><span style={{color: "red"}}>{currentUser.email}</span></Divider>
                  <Typography component="p" align="right"><b>Galleries:</b> </Typography>
                  <Button disabled variant="contained">Reset Password</Button>
                  <Button disabled variant="contained">Delete Account</Button>
                </Grid>
              </Grid>
            </Box>
          </Box>
  )
}

export default UserDetails