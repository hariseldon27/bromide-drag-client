import React from 'react'
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';


function DescriptionBlock( { description } ) {
    // console.log(description)

    const descriptionItemStyle = {
        background: "#000",
        padding: "15px",
        color: "white"
    }
    const descriptionTextStyle = {
        
    }
  return (
    <Grid
    container
    direction="row"
    justifyContent="center"
    alignItems="center"
    >
        <Grid style={descriptionItemStyle} item xs={6}>
            <Typography variant="body1" style={descriptionTextStyle}>{description}</Typography>
        </Grid>
    </Grid>
    
  )
}

export default DescriptionBlock