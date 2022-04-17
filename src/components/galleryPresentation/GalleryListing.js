import React, { useState } from 'react'
import GalleryListCard from './GalleryListCard'
import Typography from '@mui/material/Typography';
import Stack from '@mui/material/Stack';
import Box from '@mui/material/Box';



function GalleryListing( { galleryList, onGalleryPlay } ) {
  // console.log(galleryList[0].blocks)
  const now = new Date().toUTCString()
  const publishedGalleries = galleryList.filter(gallery => gallery.published_on < now)
  const cards = publishedGalleries.map(gallery => <GalleryListCard key={gallery.id} gallery={gallery} onGalleryPlay={onGalleryPlay}/>)
  //  cards.sort((a, b) => {return a.gallery.title - b.gallery.title})
  const galleryCount = publishedGalleries.length
  const recentFiveText = publishedGalleries.length >= 5 ? "- here are your 5 most recent" : ""
  const title = publishedGalleries.length > 0 ? `Your Galleries, total: ${galleryCount} ${recentFiveText}` : "You don't have any galleries yet, click the plus above and make one!"
  const coda = publishedGalleries.length > 0 ? <Typography variant="overline" component="p">Looking for the rest of your galleries? Alas our whims are but that...</Typography> : null
// console.log(galleryList)
  return (
    <Box sx={{padding: "1em"}}>
      <Typography variant="overline" component="h1" >{title}</Typography>
        <Stack gap={2} elevation={0}>

          {cards.slice(-5).reverse()}

        </Stack>
        {coda}
    </Box>
  )
}

export default GalleryListing