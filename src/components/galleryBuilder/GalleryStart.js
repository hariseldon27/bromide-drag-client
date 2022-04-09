import React from 'react'
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import TextInputBox from './BlockBuilder/TextInputBox'

function GalleryStart( { onGalleryStartChange, newGalleryEstablish } ) {

    const { gallery_name, image, description } = newGalleryEstablish
    // i think we need to see what will happen with the image...might need to
    // do all three steps (name, describe, image) at the same time for simplicity sake
   
    function handleTextChange(e) {
        
    }

  return (
    <Box>
        
        <TextInputBox name="name" bChange={ handleTextChange } bVal={gallery_name}/>
        <TextInputBox name="description" bChange={ handleTextChange } bVal={gallery_name}/>

    </Box>
  )
}

export default GalleryStart