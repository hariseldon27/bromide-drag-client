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
    
  <Card sx={{ display: 'flex', padding: "10px", margin: "0 15px 0 15px" }}>
    <Grid 
      container
      justifyContent="center"
      flexDirection="row"
      columns={{ xs: 6, sm: 8 }}> 
        <Grid item xs={12}> 
          <Grid 
          flexDirection="column"
          container 
          alignContent="flex-end"
          sx={{backgroundColor: "pink", padding: ".5em"}}
          >
            <Grid item xs={12} >
              <Typography color="pink" component="div" variant="h5">
                {title}
              </Typography>
            </Grid>

          </Grid>
        </Grid>
        <Grid item xs={12} >
          <Grid container columns={16} spacing={1}>
            <Grid item xs={16} sm={10}>
              <Grid 
                container
                direction="column"
                justifyContent="flex-end"
                alignItems="flex-end"
                >
                <Grid item >
                  <Typography variant="subtitle1" textAlign="right" color="text.secondary" component="div">
                    {description}
                  </Typography>
                </Grid>
                <Grid item >
                    <Button color="pink" name={gallery.id} id={`play_${gallery.id}`} onClick={handlePlayClick} aria-label="show">
                        View Gallery 
                    </Button>
                </Grid>
                <Grid item >
                      <GallerySocialShareLink share_url={share_url} gallery_id={id} />
                </Grid>
              </Grid>
            </Grid>
            <Grid item xs={16} sm={6}>
                <Grid 
                container
                direction="column"
                justifyContent="flex-end"
                alignItems="flex-end"
                >
                <Grid item>
                  <CardMedia
                    component="img"
                    image={featured_image_url ? featured_image_url : placeholderImage}
                    alt={title}
                    />
                </Grid>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </Card>


  )
}

export default GalleryListCard