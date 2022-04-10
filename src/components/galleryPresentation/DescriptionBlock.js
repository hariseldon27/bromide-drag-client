import React from 'react'
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';


function DescriptionBlock( { description } ) {
    // console.log(description)
  return (
    <Box>
        <Typography variant="body1">{description}</Typography>
    </Box>
  )
}

export default DescriptionBlock