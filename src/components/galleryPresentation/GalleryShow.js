import React from 'react'
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import Button from '@mui/material/Button';
import Backdrop from '@mui/material/Backdrop';

function GalleryShow() {

    //this is the holder for the actual gallery show elements
    // elements will be:
    // 1) hero block - featured image, title, author
    // 2) blocks (we need 3 templates?  or maybe just styled by props)
    // 3) coda (is this just a secret block type that only we can select?)

  return (
    <div>
        <Backdrop
        sx={{ color: '#fff', zIndex: (theme) => theme.zIndex.drawer + 1 }}
        open={open}
        onClick={handleClose}
      >
        <HeroBlock gallery={galleryList} />  
      </Backdrop>  
      <Button onClick={handleToggle}>Show backdrop</Button>
    </div>
  )
}

export default GalleryShow

