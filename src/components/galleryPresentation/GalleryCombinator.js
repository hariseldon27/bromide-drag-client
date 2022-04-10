import React from 'react'
import HeroBlock from './HeroBlock'
import DescriptionBlock from './DescriptionBlock'
import BlockShow from './BlockShow'
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import CodaCard from './CodaCard';


function GalleryCombinator( { blocks, galleryDetails } ) {
  return (
    <Box sx={{width: "100%"}}>
        <Paper >
            <HeroBlock galleryDetails={galleryDetails} /> 
            <DescriptionBlock description={galleryDetails.description} /> 
            <BlockShow blocks={blocks}/>
            <CodaCard galleryDetails={galleryDetails}/>
        </Paper>
    </Box>
  )
}

export default GalleryCombinator