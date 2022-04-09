import React, { useEffect, useState } from 'react'
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import Button from '@mui/material/Button';
import Backdrop from '@mui/material/Backdrop';

import HeroBlock from './HeroBlock';

import dummyData from '../galleryBuilder/dummyData.json'

function GalleryPresentation() {
  const [open, setOpen] = useState(false);
  const [galleryList, setGalleryList] = useState([])
  const handleClose = () => {
    setOpen(false);
  };
  const handleToggle = () => {
    setOpen(!open);
  };

  useEffect(() => {
    setGalleryList(dummyData)
  }, [])

  //top is a header
  return (
    
    <div>


    </div>
  )
}

export default GalleryPresentation