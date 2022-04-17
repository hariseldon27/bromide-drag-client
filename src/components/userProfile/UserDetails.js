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
      backgroundColor: "rgba(254,192,202,.3)",    
        backdropFilter: "blur(2px)",
        filter: "grayscale(60%)",
        // boxShadow: "0px 0px 10px 10px rgba(150,150,150,0.6)",

        
    }

    const userDeetzHolderStyle ={
      padding: '1em',
      
    }

  return (

          <Box style={userDetailsStyle}>
            <Box style={lookOverlayLook}>
              <Grid container
              spacing={.5}
              gap={1}
              direction="column"
              justifyContent="center"
              alignItems="center"
              style={userDeetzHolderStyle}
              >
                  <Grid item xs>
                    <Avatar sx={{height: 125, width: 125}} alt={currentUser.email} src={currentUser.avatar} />
                  </Grid>
                  <Grid item xs>
                    <Divider textAlign="right"><span style={{color: "secondary", backgroundColor: "rgba(100,100,100,.5)", padding: ".2em",}}>{currentUser.email}</span></Divider>
                  </Grid>
                  {/* <Typography component="p" align="right"><b>Galleries:</b> </Typography> */}
                    <Grid item xs>
                    <Button disabled variant="contained">Reset Password</Button>
                    </Grid>
                    <Grid item xs>
                      <Button disabled variant="contained">Delete Account</Button>
                    </Grid>
              </Grid>
            </Box>
          </Box>
  )
}

export default UserDetails