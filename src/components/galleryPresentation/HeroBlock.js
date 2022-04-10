import React from 'react'
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';
import Divider from '@mui/material/Divider';
import Chip from '@mui/material/Chip';
import { useDispatch, useSelector } from "react-redux"





function HeroBlock( { galleryDetails } ) {
    const { title, published_on, featured_image, other_props } = galleryDetails
    const dispatch = useDispatch()
    const currentUser = useSelector(state => state.user)
    // console.log(featured_image)
const heroImgStyle = {
    width: "100%"
}

  return (
    <Paper>
        <Chip label={currentUser.email} />
        <img style={heroImgStyle}  className="hero-image" src={featured_image}/>   
        {/* <Typography variant="h2" > {title} </Typography> */}
        <Divider>
            <Chip label={title} />
        </Divider>

    </Paper>
  )
}

export default HeroBlock