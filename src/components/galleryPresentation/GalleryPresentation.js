import React, { useEffect, useState } from 'react'
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import Button from '@mui/material/Button';
import GalleryShow from './GalleryShow';

import GalleryListing from './GalleryListing';

import dummyData from '../galleryBuilder/dummyData.json'

function GalleryPresentation() {
  const [open, setOpen] = useState(false);
  const [galleryList, setGalleryList] = useState([])
  const [galleryToShow, setGalleryToShow] = useState([{}])

  const handleClose = () => {
    setOpen(false);
  };
  const handleToggle = () => {
    setOpen(!open);
  };
  const handleGalleryPlay = (e) => {
    handleToggle()
    console.log(e.target.name)
    // take the id of the targeted gallery
    // set just that gallery in state
    // send that whole gallery to the GalleryShow
    const galToShow = galleryList.filter(gallery => gallery.id == e.target.name)
    // console.log(galToShow)
    setGalleryToShow(galToShow)
  }

  useEffect(() => {
    const currentToken = localStorage.getItem("token")
    fetch('http://localhost:3000/user-galleries', {
      method: "GET",
      headers: {
        "Authorization": `Bearer ${currentToken}`
      }
    })
    .then(r => r.json())
    .then((data) => console.log(data))
    // setGalleryList(data)
  }, [])

  console.log("is open", open)

  return (
    
    <div>

      <GalleryListing galleryList={galleryList} onGalleryPlay={handleGalleryPlay}/>
      <GalleryShow open={open} setOpen={setOpen} galleryToShow={galleryToShow}/>
    </div>
  )
}

export default GalleryPresentation