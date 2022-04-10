import React, {useEffect, useState} from 'react'
import { useDispatch, useSelector } from "react-redux"


import GalleryStart from './GalleryStart'
import GalleryFill from './GalleryFill'
import GalleryDescribe from './GalleryDescribe'
import GalleryManage from './GalleryManage'

import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';

import dummyData from './dummyData.json'


function GalleryBuilder() {

  const dispatch = useDispatch()
  const currentUser = useSelector(state => state.user)
  const [userError, setUserError] = useState(false)
  const [step, setStep] = useState("start")

  
console.log(dummyData)

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
      case "start":
        return <GalleryStart step={step} setStep={setStep} userError={userError} setUserError={setUserError}/>
        break;
      case "fill":
        return <GalleryFill step={step} setStep={setStep} userError={userError} setUserError={setUserError}/>
        break;
      case "manage":
        return <GalleryManage step={step} setStep={setStep} userError={userError} setUserError={setUserError} />
        break;
      case "end":
        console.log("end")
        break;
      default: 
        return <GalleryStart step={step} setStep={setStep} userError={userError} setUserError={setUserError}/>
    }
  }
  //single item in return that is swapped out based on what 'step' we are in in the process
  return (
    <Paper elevation={1}>
    
      <ToolBox />

    </Paper>
  )
}

export default GalleryBuilder