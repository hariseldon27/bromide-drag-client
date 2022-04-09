import React, {useState} from 'react'


import GalleryStart from './GalleryStart'
import GalleryFill from './GalleryFill'
import GalleryDescribe from './GalleryDescribe'

import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';



function GalleryBuilder() {

  const [step, setStep] = useState({})
  const [newGalleryEstablish, setNewGalleryEstablish] = useState({
    gallery_name: "new gallery", 
    image: "",
    description: "",

  })
  function handleGalleryStartChange(e) {
    const name = e.target.name;
    let value = e.target.value;
    setNewGalleryEstablish({...newGalleryEstablish, [name]: value})
  }

  //  ok - we need to keep track of where we are in the process...
  //  GalleryStart => gets gallery name and featured_image for 
  //  new_gallery = {name:, featured_image:} 
  //  GalleryDescribe => gets gallery text description 
  //  new_callery = {name:, featured_image:, description:}
  //  write to database and get ID
  //  move to GalleryFill with ID returned from database
  //  GalleryFill has BlockBuilder and CodaCapper

  return (
    <Paper elevation={24}>
    
      <Typography variant="h6" component="h1">Mk Gal mk1</Typography>

      <GalleryStart onGalleryStartChange={handleGalleryStartChange} newGalleryEstablish={newGalleryEstablish}/>

    </Paper>
  )
}

export default GalleryBuilder