import React, { useState } from 'react'
import GalleryListCard from './GalleryListCard'
import Typography from '@mui/material/Typography';
import Stack from '@mui/material/Stack';



function GalleryListing( { galleryList, onGalleryPlay } ) {
  // console.log(galleryList[0].blocks)
  const now = new Date().toUTCString()
  const publishedGalleries = galleryList.filter(gallery => gallery.published_on < now)
  const cards = publishedGalleries.map(gallery => <GalleryListCard key={gallery.id} gallery={gallery} onGalleryPlay={onGalleryPlay}/>)
  const galleryCount = publishedGalleries.length
  const title = publishedGalleries.length > 0 ? `Your Galleries, total: ${galleryCount}` : "You don't have any galleries yet, click the plus above and make one!"
// console.log(galleryList)
  return (
    <div>
      <Typography variant="overline" component="h1" >{title}</Typography>
        <Stack gap={2}>
          {cards}
        </Stack>
    </div>
  )
}

export default GalleryListing