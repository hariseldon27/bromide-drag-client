import React from 'react'
import Switch from '@mui/material/Switch';
import { Typography } from '@mui/material';
import Box from '@mui/material/Box';
import { useDispatch } from "react-redux"
import { useSelector } from "react-redux"
import { toggleDarkMode } from "../reducers/themeToggleSlice"

function ModeSwitch( { onModeChange } ) {
  const dispatch = useDispatch()
  const isDarkMode = useSelector(state => state.themeToggle.isDarkMode)

  function handleDarkmodeToggle() {
    dispatch(toggleDarkMode())
  }
  console.log(isDarkMode)
  return (
    <Box>
        <Typography variant="p">switch to {isDarkMode? "dark mode" : "light mode"}</Typography>
        <Switch size="small" onChange={handleDarkmodeToggle}/>
    </Box>
  )
}

export default ModeSwitch