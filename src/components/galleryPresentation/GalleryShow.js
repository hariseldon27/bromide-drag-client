import React, {useState} from 'react'
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import Button from '@mui/material/Button';
import Backdrop from '@mui/material/Backdrop';
import HeroBlock from './HeroBlock';

function GalleryShow( { open, setOpen, galleryToShow } ) {
    const [blocks, setBlocks] = useState([])

    const handleClose = () => {
        setOpen(false);
      };
      const handleToggle = () => {
        setOpen(!open);
      };

    //this is the holder for the actual gallery show elements
    // elements will be:
    // 1) hero block - featured image, title, author
    // 2) blocks (we need 3 templates?  or maybe just styled by props)
    // 3) coda (is this just a secret block type that only we can select?)
// console.log(galleryToShow[0].title)
    const galleryDetails = galleryToShow[0]
  return (
    <>
        <Backdrop
        sx={{ color: '#fff', zIndex: (theme) => theme.zIndex.drawer + 1 }}
        open={open}
        onClick={handleClose}
      >
        <HeroBlock galleryDetails={galleryDetails} />  
      </Backdrop>  
      <Button onClick={handleToggle}>Show backdrop</Button>
    </>
  )
}

export default GalleryShow

