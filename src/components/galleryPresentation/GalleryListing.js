import React, { useState } from 'react'
import GalleryListCard from './GalleryListCard'
import Typography from '@mui/material/Typography';



function GalleryListing( { galleryList, onGalleryPlay } ) {
  // console.log(galleryList[0].blocks)
  const publishedGalleries = galleryList.filter(gallery => gallery.published = true)
  const cards = publishedGalleries.map(gallery => <GalleryListCard key={gallery.id} gallery={gallery} onGalleryPlay={onGalleryPlay}/>)

// console.log(galleryList)
  return (
    <div>
      <Typography variant="h5" component="h1" >Galleries</Typography>
      {cards}
    </div>
  )
}

export default GalleryListing