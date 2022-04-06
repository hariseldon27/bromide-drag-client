import React from 'react'
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';


function LogOut() {
    function handleLogOut(){
        //get token from state, send token to backend delete route
        // need to get currentUser into redux state
    }
  return (
    <Box>
        <Button variant="outline-dark" onClick={handleLogOut} id="logout-button" name="logout">Log Out</Button>
    </Box>
  )
}

export default LogOut