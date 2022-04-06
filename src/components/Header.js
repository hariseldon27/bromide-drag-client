import React, { useState } from 'react'
import { Box } from '@mui/material'
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import LogOut from '../components/LogOut';
import { useSelector } from "react-redux"
import Stack from '@mui/material/Stack';
import ModeSwitch from '../components/ModeSwitch';


function Header() {
  const isDarkMode = useSelector(state => state.themeToggle.isDarkMode)
  const currentUser = useSelector(state => state.user)
  const [isSignUpShowing, setIsSignUpShowing] = useState(false)  


    
  const headerStyle = {
    maxHeight: "100px",
    backgroundColor: 'secondary.main'
  }

    return (
    <Container>
            <Container maxWidth="sm">
              <Stack direction="row" spacing={2} className="header" sx={headerStyle}>
                <LogOut/>
                  User: {currentUser.email}
                <ModeSwitch />
              </Stack>

            </Container>
        </Container>
  )
}

export default Header