import React, { useState } from 'react'
import GalleryListCard from './GalleryListCard'
import Typography from '@mui/material/Typography';
import Stack from '@mui/material/Stack';



function GalleryListing( { galleryList, onGalleryPlay } ) {
  // console.log(galleryList[0].blocks)
  const now = new Date().toUTCString()
  const publishedGalleries = galleryList.filter(gallery => gallery.published_on < now)
  const cards = publishedGalleries.map(gallery => <GalleryListCard key={gallery.id} gallery={gallery} onGalleryPlay={onGalleryPlay}/>)

// console.log(galleryList)
  return (
    <div>
      <Typography variant="h5" component="h1" >Galleries</Typography>
        <Stack gap={2}>
          {cards}
        </Stack>
    </div>
  )
}

export default GalleryListing