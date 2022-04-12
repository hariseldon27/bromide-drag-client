import React from 'react'
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';


function TextBlock( { block } ) {
    const {
        block_type,
        bg_color,
        block_id,
        font,
        font_color,
        gallery_id,
        id,
        imageHeight,
        imageWidth,
        image_url,
        text,
        text_align,
        type,
        width } = block

    const textItemStyle = {
        background: "#000",
        padding: "15px",
        color: "white"
    }
    const textTextStyle = {
        
    }
  return (
    <Grid
    container
    direction="row"
    justifyContent="center"
    alignItems="center"
    >
        <Grid style={textItemStyle} item xs={6}>
            <Typography variant="body1" style={textTextStyle}>{text}</Typography>
        </Grid>
    </Grid>
    
  )
}

export default TextBlock