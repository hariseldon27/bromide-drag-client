import React, {useState} from 'react'
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Grid from '@mui/material/Grid';
import CardMedia from '@mui/material/CardMedia';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import PlayArrowIcon from '@mui/icons-material/PlayArrow';
import Button from '@mui/material/Button';
import GallerySocialShareLink from '../socialLinkGenerator/GallerySocialShareLink';


function GalleryListCard( { gallery, onGalleryPlay } ) {
    const { description, title, id, featured_image_url, share_url  } = gallery
    const handlePlayClick = (e) => {
        onGalleryPlay(e)
    }
    const placeholderImage = "https://blog.greendot.org/wp-content/uploads/sites/13/2021/09/placeholder-image.png"
  
  
    return (
    
    <Card sx={{ display: 'flex', border: "1px solid red", padding: "10px", margin: "0 15px 0 15px" }}>
      {/* main grid start */}
      <Grid 
      container
      justifyContent="center"
      flexDirection="row"
      columns={{ xs: 6, sm: 8 }}> 
        <Grid item xs={12}>
          <Grid 
          flexDirection="column"
          container 
          sx={{ flex: '1 0 auto', backgroundColor: "pink", textAlign: "center" }}
          >
            <Grid item xs={12}>
              <Typography component="div" variant="h5">
                {title}
              </Typography>
            </Grid>
            <Grid item xs={12}>
              <Typography variant="subtitle1" color="text.secondary" component="div">
                {description}
              </Typography>
            </Grid>
          </Grid>
        </Grid>
        <Grid item xs={12}>
          <Grid 
            container
            direction="row"
            justifyContent="flex-start"
            alignItems="flex-start"
            >
            <Grid item xs={12} sm={8} sx={{margin: '0 auto'}}>
                      <Button name={gallery.id} id={`play_${gallery.id}`} onClick={handlePlayClick} aria-label="show">
                          View Gallery 
                      </Button>
            </Grid>
    
            <Grid item xs={8} sm={4} sx={{margin: '0 auto'}} >
              <CardMedia
                component="img"
                image={featured_image_url ? featured_image_url : placeholderImage}
                alt={title}
                />
            </Grid>
            <Grid item xs={12}>
                      <GallerySocialShareLink share_url={share_url} gallery_id={id} />
                </Grid>
          </Grid>
        </Grid>
      </Grid>
    </Card>


  )
}

export default GalleryListCard