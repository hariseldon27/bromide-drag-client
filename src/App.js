import './App.css';
import React, { useState } from 'react';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import ModeSwitch from './components/ModeSwitch';
import CssBaseline from '@mui/material/CssBaseline';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';


function App( ) {
const [isDarkMode, setIsDarkMode] = useState(false)

function handleDarkModeChange(e) {
  setIsDarkMode(isDarkMode => isDarkMode = !isDarkMode)
}

const colorMode = createTheme({
    palette: {
      mode: isDarkMode ? 'light' : 'dark',
    },
  });

const mainBody = {
  maxWidth: "85%",
}
  
const headerStyle = {
  maxHeight: "100px",
  backgroundColor: 'secondary.main'
}

  return (
    <div>
    <ThemeProvider theme={colorMode} >
      <CssBaseline />
      <Container>
          <Container maxWidth="sm">
            <Container className="header" sx={headerStyle}>
              <ModeSwitch isDarkMode={isDarkMode} onModeChange={handleDarkModeChange}/>
            </Container>
            <Box sx={mainBody}>
              <Typography variant="h3">hello world</Typography>
              <Button variant="outlined" color="secondary" >Good Bye</Button>
            </Box>
          </Container>
      </Container>
    </ThemeProvider>
  </div>
  )
  
}

export default App;
