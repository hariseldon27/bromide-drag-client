import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import GalleryShow from './galleryPresentation/GalleryShow';
import Loading from '../components/socialLinkGenerator/Loading'
import Typography from '@mui/material/Typography';


function ShareViewer() {
    const [open, setOpen] = useState(false)
    const [blocksToShow, setBlocksToShow] = useState([])
    const [galleryToShow, setGalleryToShow] = useState([])
    const [showLoading, setShowLoading] = useState(false)
    
    const params = useParams()
    console.log(params)

    function showGallery(){
        console.log(params.id)
        goFetch()
    }

    //fetch based on params
    function goFetch(){
        fetch(`http://localhost:3000/share/${params.id}/`)
        .then((response) => {
            if (response.ok) { 
             return response.json();
            }
            return Promise.reject(response); 
          })
            // if resp.ok then we proceed to set onLogin
            // reset the field text, and setUserError to false
            .then((data) => { 
              console.log("came back as ", data); 
              setGalleryToShow([data])
              setBlocksToShow(data.blocks)
              comicalLoading()

            })
            // if there is an error then send the error info to a handler
            .catch((error) => {
              console.log(error)
              renderUserError(error)
            });
          }
          //this sets our user error - currently inactive - then logs an error
          function renderUserError(error){
            console.log('Oops... ', error.statusText)
          }
          function comicalLoading() {
            setShowLoading(true)
            setTimeout(() => {setShowLoading(false)}, 1500)
            setOpen(true)
          }

          console.log(galleryToShow)

  return (
    <Box sx={{ display: 'flex', alignItems: 'center', pl: 1, pb: 1, justifyContent: 'center' }}>
        <Box item sx={{display: 'flex',  }}  ><Button onClick={showGallery}>View your gallery</Button></Box>
        {showLoading ? <Typography variant="body1"><Loading /></Typography> : null}
        <GalleryShow open={open} setOpen={setOpen} blocksToShow={blocksToShow} galleryToShow={galleryToShow}/>
    </Box>
  )
}

export default ShareViewer