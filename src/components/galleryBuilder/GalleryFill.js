import React, { useEffect } from 'react'
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Container from '@mui/material/Container';
import Stack from '@mui/material/Stack';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';

import Button from '@mui/material/Button';

import TextField from '@mui/material/TextField';
import Input from '@mui/material/Input';

import { useDispatch, useSelector } from "react-redux"
function GalleryFill( {setStep} ) {

  function handleBack(e){
    e.preventDefault()
    setStep("start")
  }

  return (
    <Box>
      <Box sx={{flexGrow: 1}}>
        <Grid container
        gap={2}
        direction="row"
        justifyContent="space-around"
        alignItems="stretch">
        <Grid item xs={4}>


        </Grid> 
        <Grid item sm={4}>
          
        </Grid>

        <Grid item lg={4}>
          
        </Grid>
      </Grid>

    </Box>

      <Button onClick={ handleBack }>back</Button>
    </Box>
  )
}

export default GalleryFill