import React, { useState } from 'react'
import { useDispatch, useSelector } from "react-redux"

import GalleryStart from './GalleryStart'
import GalleryFill from './GalleryFill'
import GalleryManage from './GalleryManage'

import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import Grid from '@mui/material/Grid';
import Avatar from '@mui/material/Avatar';
import Box from '@mui/material/Box';

import AddPhotoAlternateOutlinedIcon from '@mui/icons-material/AddPhotoAlternateOutlined';
import AutoAwesomeOutlinedIcon from '@mui/icons-material/AutoAwesomeOutlined';
import CameraRollOutlinedIcon from '@mui/icons-material/CameraRollOutlined';
import SaveOutlinedIcon from '@mui/icons-material/SaveOutlined';


import GalleryFinish from './GalleryFinish'
import { setStep } from '../../reducers/gallerySlice'


function GalleryBuilder() {

  const dispatch = useDispatch()
  const currentUser = useSelector(state => state.user)
  const gallery = useSelector(state => state.gallery)
  const [userError, setUserError] = useState(false)
  const step = useSelector( state => state.gallery.step )
  
// console.log(dummyData)

console.log("gallery build step: ", step)

function handleChangeStep(e){
  dispatch(setStep(e.target.name))
}
console.log(gallery)
function StepsIndicator(){
  return (
    <>
      <Button disabled onClick={handleChangeStep} name="start" variant={step === "start" ? "outlined" : null}>start<CameraRollOutlinedIcon /></Button>
      <Button disabled  onClick={handleChangeStep} name="fill" variant={step === "fill" ? "outlined" : null} >first block <AutoAwesomeOutlinedIcon /></Button>
      <Button disabled onClick={handleChangeStep} name="manage" variant={step === "manage" ? "outlined" : null} >add to it <AddPhotoAlternateOutlinedIcon /></Button>
      <Button disabled onClick={handleChangeStep} name="finish" variant={step === "finish" ? "outlined" : null} >finish <SaveOutlinedIcon /></Button>
    </>
  )
}
function Crummy(){
  
  return (
    
    <Stack 
    direction="column"
    justifyContent="flex-end"
    alignItems="center"
    spacing={2}
    className="header" 
    padding='1em'
    >
      {gallery.featured_image_url ? <Avatar alt="new gallery image" src={gallery.featured_image_url} /> : null}
      <Typography variant="overline">gallery id: {gallery.id} title: {gallery.title}</Typography>
      <StepsIndicator />
    </Stack>
  );
}
  //  ok - we need to keep track of where we are in the process...
  //  GalleryStart => gets gallery name and featured_image for 
  //  new_gallery = {name:, featured_image:} 
  //  GalleryDescribe => gets gallery text description 
  //  new_callery = {name:, featured_image:, description:}
  //  write to database and get ID
  //  move to GalleryFill with ID returned from database
  //  then to manage, and finally to coda and publish

  function ToolBox() {
    switch (step) {
      case "start":
        return <GalleryStart userError={userError} setUserError={setUserError}/>
        break;
      case "fill":
        return <GalleryFill userError={userError} setUserError={setUserError}/>
        break;
      case "manage":
        return <GalleryManage userError={userError} setUserError={setUserError} />
        break;
      case "finish":
        return <GalleryFinish userError={userError} setUserError={setUserError} />
        break;
      default: 
        return <GalleryStart userError={userError} setUserError={setUserError}/>
    }
  }
  //single item in return that is swapped out based on what 'step' we are in in the process
  return (
    <Box>
      <Grid container
      gap={2}
      spacing={1}
      direction="row"
      justifyContent="flex-start"
      alignItems="center">
        <Grid item xs={3}>
          <Paper elevation={1}>
            <Crummy />
          </Paper>
        </Grid>
        <Grid item xs={8}>
          <Paper elevation={1}>
            <ToolBox />
          </Paper>
          </Grid>
      </Grid>
    </Box>
  )
}

export default GalleryBuilder