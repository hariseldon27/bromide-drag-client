import React from 'react'
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import TextField from '@mui/material/TextField';
import SaveOutlinedIcon from '@mui/icons-material/SaveOutlined';
import Button from '@mui/material/Button';

import { useDispatch, useSelector } from "react-redux"

function GalleryFinish() {

    function handleFinishClick(){
        console.log("clickfini")
    }

  return (
    <Box sx={{mx: "auto"}}>
        <Paper >
            <TextField variant="standard"/>
            <Button onClick={handleFinishClick}><SaveOutlinedIcon/></Button>
        </Paper>
    </Box>
  )
}

export default GalleryFinish