import React from 'react'
import BlockList from './BlockList'
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';


function GalleryManage() {

  

  return (
      <Box sx={{flexGrow: 1}}>
        <Grid container
        gap={2}
        direction="row"
        justifyContent="space-around"
        alignItems="stretch">
          <Grid item sm={3}>
              <BlockList />
          </Grid>
        </Grid>
    </Box>
  )
}

export default GalleryManage