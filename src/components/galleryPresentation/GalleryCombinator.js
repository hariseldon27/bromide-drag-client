import React from 'react'
import HeroBlock from './HeroBlock'
import DescriptionBlock from './DescriptionBlock'
import BlockShow from './BlockShow'
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';


function GalleryCombinator( { blocks, galleryDetails } ) {
  return (
    <Box sx={{width: "100%"}}>
        <Paper>
            <HeroBlock galleryDetails={galleryDetails} /> 
            <DescriptionBlock description={galleryDetails.description} /> 
            <BlockShow blocks={blocks}/>
        </Paper>
    </Box>
  )
}

export default GalleryCombinator