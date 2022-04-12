import React from 'react'
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';
import Divider from '@mui/material/Divider';
import Chip from '@mui/material/Chip';
import { useDispatch, useSelector } from "react-redux"





function HeroBlock( { galleryDetails } ) {
    const { title, published_on, featured_image_url, other_props } = galleryDetails
    const dispatch = useDispatch()
    const currentUser = useSelector(state => state.user)
    // console.log(featured_image)
const heroImgStyle = {
    width: "100%"
}

  return (
    <Box>
        <img className="hero-image" style={heroImgStyle} src={featured_image_url}/>   
        <Divider>
            <Chip label={title} />
        </Divider>
    </Box>
  )
}

export default HeroBlock