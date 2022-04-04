import React from 'react'
import Switch from '@mui/material/Switch';
import { Typography } from '@mui/material';
import Box from '@mui/material/Box';

function ModeSwitch( { isDarkMode, onModeChange } ) {
  return (
    <Box>
        <Typography variant="p">switch to {isDarkMode? "dark mode" : "light mode"}</Typography>
        <Switch size="small" onChange={onModeChange}/>
    </Box>
  )
}

export default ModeSwitch