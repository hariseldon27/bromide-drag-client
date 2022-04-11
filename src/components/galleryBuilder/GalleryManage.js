import React from 'react'
import BlockList from './BlockList'
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Button from '@mui/material/Button';
import { setStep, setGalleryInEdit } from '../../reducers/gallerySlice'
import { useDispatch, useSelector } from "react-redux"


function GalleryManage( { userError, setUserError } ) {
  const dispatch = useDispatch()

  function handleFinish(){
    dispatch(setStep("finish"))
  }

  return (
      <Box sx={{flexGrow: 1}}>
        <Grid container
        gap={2}
        direction="row"
        justifyContent="space-around"
        alignItems="stretch">
          <Grid item sm={3}>
              <BlockList />
              <Button onClick={handleFinish}>Add Coda and Finish</Button>

          </Grid>
        </Grid>
    </Box>
  )
}

export default GalleryManage