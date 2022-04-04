import React from 'react'
import Switch from '@mui/material/Switch';
import { Typography } from '@mui/material';
import Box from '@mui/material/Box';

function ModeSwitch( { isDarkMode, onModeChange } ) {
  return (
    <div>
        <Typography variant="p">{isDarkMode? "dark mode" : "light mode"}</Typography>
        <Switch size="small" onChange={onModeChange}/>
    </div>
  )
}

export default ModeSwitch