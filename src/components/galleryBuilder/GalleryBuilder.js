import React, {useEffect, useState} from 'react'
import { useDispatch, useSelector } from "react-redux"


import GalleryStart from './GalleryStart'
import GalleryFill from './GalleryFill'
import GalleryDescribe from './GalleryDescribe'

import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';



function GalleryBuilder() {

  const dispatch = useDispatch()
  const currentUser = useSelector(state => state.user)
  const [userError, setUserError] = useState(false)

  const [step, setStep] = useState("start")

console.log("gallery step: ", step)

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
      // case "start":
      //   return <GalleryStart step={step} setStep={setStep} userError={userError} setUserError={setUserError}/>
      //   break;
      case "fill":
        return <GalleryFill step={step} setStep={setStep} userError={userError} setUserError={setUserError}/>
        break;
      case "end":
        console.log("end")
        break;
      default: 
        return <GalleryStart step={step} setStep={setStep} userError={userError} setUserError={setUserError}/>
    }
  }
  return (
    <Paper elevation={24}>
    
      <Typography variant="h6" component="h1">Mk Gal mk1</Typography>
      <ToolBox/>

    </Paper>
  )
}

export default GalleryBuilder