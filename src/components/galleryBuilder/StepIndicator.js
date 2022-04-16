import React from 'react'
import {  useSelector } from "react-redux"

import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';

import AddPhotoAlternateOutlinedIcon from '@mui/icons-material/AddPhotoAlternateOutlined';
import AutoAwesomeOutlinedIcon from '@mui/icons-material/AutoAwesomeOutlined';
import CameraRollOutlinedIcon from '@mui/icons-material/CameraRollOutlined';
import SaveOutlinedIcon from '@mui/icons-material/SaveOutlined';

function StepIndicator() {

  const step = useSelector( state => state.gallery.step )

  const active = {
    color:"#fec0ca"
  }
  const inactive = {
    color:"#cccccc"
  }
    return (
        <Grid container
        direction="column"
        justifyContent="flex-end"
        alignItems="stretch"
        gap={2}>
    
          <Grid item xs={12} sx={step === "start" ? active : inactive}>
            <Grid container 
              direction="row"
              justifyContent="space-between"
              alignItems="center"
              sx={{py:2}}>
                <Grid item xs={8}>
                  <Typography variant="overline">start</Typography>
                </Grid>
                <Grid item xs={2}>
                  <CameraRollOutlinedIcon />
                </Grid>
              </Grid>
          </Grid>
    
    
          <Grid item xs={12} sx={step === "fill" ? active : inactive}>
            <Grid container 
                  direction="row"
                  justifyContent="space-between"
                  alignItems="center">
              <Grid item xs={8}>
                <Typography variant="overline">first block</Typography>
              </Grid>
              <Grid item xs={2}>
                <AutoAwesomeOutlinedIcon />
              </Grid>
            </Grid>
          </Grid>
    
          <Grid item xs={12} sx={step === "manage" ? active : inactive}>
            <Grid container 
                  direction="row"
                  justifyContent="space-between"
                  alignItems="center">
                <Grid item xs={8}>
                  <Typography variant="overline" >add to it</Typography>
                </Grid>
                <Grid item xs={2}>
                  <AddPhotoAlternateOutlinedIcon />
                </Grid>
            </Grid>
          </Grid>
    
          <Grid  item xs={12} sx={step === "finish" ? active : inactive}>
            <Grid container 
              direction="row"
              justifyContent="space-between"
              alignItems="center">
                <Grid item sx={8}>
                  <Typography variant="overline" >finish</Typography>
                </Grid>
                <Grid item xs={2}>
                  <SaveOutlinedIcon />
                </Grid>
            </Grid>
          </Grid>
        </Grid>
        
      )
    }

export default StepIndicator