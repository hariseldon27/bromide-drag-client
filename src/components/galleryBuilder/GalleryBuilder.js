import React, {useEffect, useState} from 'react'
import { useDispatch, useSelector } from "react-redux"


import GalleryStart from './GalleryStart'
import GalleryFill from './GalleryFill'
import GalleryDescribe from './GalleryDescribe'
import GalleryManage from './GalleryManage'

import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';




import dummyData from './dummyData.json'
import GalleryFinish from './GalleryFinish'
import { setStep } from '../../reducers/gallerySlice'


function GalleryBuilder() {

  const dispatch = useDispatch()
  const currentUser = useSelector(state => state.user)
  const [userError, setUserError] = useState(false)
  const step = useSelector( state => state.gallery.step )
  
// console.log(dummyData)

console.log("gallery step: ", step)

function handleChangeStep(e){
  dispatch(setStep(e.target.name))
}

function Crummy(){
  return (
    <Stack 
    direction="row"
    justifyContent="flex-end"
    alignItems="center"
    spacing={2}
    className="header" 
    >
      <Typography variant="overline">live data won't like these to change yet:</Typography>
      <Button onClick={handleChangeStep} name="start" variant={step === "start" ? "outlined" : null}>start</Button>
      <Button onClick={handleChangeStep} name="fill" variant={step === "fill" ? "outlined" : null} >fill</Button>
      <Button onClick={handleChangeStep} name="manage" variant={step === "manage" ? "outlined" : null} >manage</Button>
      <Button onClick={handleChangeStep} name="finish" variant={step === "finish" ? "outlined" : null} >finish</Button>
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
  //  GalleryFill has BlockBuilder and CodaCapper

  function ToolBox() {
    switch (step) {
      case "start":
        return <GalleryStart   userError={userError} setUserError={setUserError}/>
        break;
      case "fill":
        return <GalleryFill  userError={userError} setUserError={setUserError}/>
        break;
      case "manage":
        return <GalleryManage  userError={userError} setUserError={setUserError} />
        break;
      case "finish":
        return <GalleryFinish  userError={userError} setUserError={setUserError} />
        break;
      default: 
        return <GalleryStart  userError={userError} setUserError={setUserError}/>
    }
  }
  //single item in return that is swapped out based on what 'step' we are in in the process
  return (
    <Paper elevation={1}>
      <Crummy />
      <ToolBox />

    </Paper>
  )
}

export default GalleryBuilder