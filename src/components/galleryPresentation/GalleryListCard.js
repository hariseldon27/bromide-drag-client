import React, {useState} from 'react'
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import PlayArrowIcon from '@mui/icons-material/PlayArrow';
import Button from '@mui/material/Button';


function GalleryListCard( { gallery, onGalleryPlay } ) {
    const { description, title, id, featured_image  } = gallery
    // console.log(description)
    const handlePlayClick = (e) => {
        // console.log(e.target)
        onGalleryPlay(e)
    }
  return (
    
    <Card sx={{ display: 'flex' }}>
      <Box sx={{ display: 'flex', flexDirection: 'column' }}>
        <CardContent sx={{ flex: '1 0 auto' }}>
          <Typography component="div" variant="h5">
            {title}
          </Typography>
          <Typography variant="subtitle1" color="text.secondary" component="div">
            {description}
          </Typography>
        </CardContent>
        <Box sx={{ display: 'flex', alignItems: 'center', pl: 1, pb: 1 }}>
            <Button name={gallery.id} id={`play_${gallery.id}`} onClick={handlePlayClick} aria-label="show">
                View Gallery 
            </Button>
        </Box>
      </Box>
      <CardMedia
        component="img"
        sx={{ width: 151 }}
        image={featured_image}
        alt={title}
      />
    </Card>


  )
}

export default GalleryListCard