import React, { useState, useEffect } from 'react'
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Grid from '@mui/material/Grid';

import TextField from '@mui/material/TextField';
import Input from '@mui/material/Input';
import FeaturedImageUpload from './FeaturedImageUpload';
import { useDispatch, useSelector } from "react-redux"

function GalleryStart( { userError, setUserError, step, setStep  } ) {
    const dispatch = useDispatch()
    const currentUser = useSelector(state => state.user)

    const [newGalleryEstablish, setNewGalleryEstablish] = useState({
        title: "new gallery", 
        description: "description",
      })
      const [featuredImage, setFeaturedImage] = useState()
  

      //show the gallery being built when it changes
    //   useEffect(() => {
    //     console.log(newGalleryEstablish)
    //     console.log(featuredImage)
    //   }, [newGalleryEstablish, featuredImage])
   
    function handleGalleryStartChange(e) {
        // console.log( e )
        if (e instanceof File) {
          setFeaturedImage( e )
        } else {
          console.log("string")
          const name = e.target.name;
          let value = e.target.value;
          setNewGalleryEstablish({...newGalleryEstablish, [name]: value})
        }
      }

      //fake handle submit
      const fakeHandleSubmit = e => {
          e.preventDefault()
          console.log('submitfake')
          setStep("fill")
      }
  // create new record in db 
  const handleSubmit = e => {
    e.preventDefault();
    const formData = new FormData()
    formData.append(newGalleryEstablish)
    formData.append("featuredImage", featuredImage)
    fetch(`http://localhost:3000/new-gallery/${currentUser.id}`, {
      method: 'POST',
      headers: {
        "Authorization": `Bearer ${currentUser.token}`
        },
      body: formData
    })
      // .then(res => res.json())
    .then((response) => {
      if (response.ok) { 
       return response.json();
      }
      return Promise.reject(response); 
    })
      // if resp.ok then we proceed to set onLogin
      // reset the field text, and setUserError to false
      .then((data) => { 
        console.log("new gal came back as ", data); 
        // console.log(data.user)
        // console.log(data.avatar)
      //   dispatch(setUserAvatar({
      //     avatar: data.avatar
      // }))
      })
      // if there is an error then send the error info to a handler
      .catch((error) => {
        // console.log(error)
        renderUserError(error)
      });
    }
    //this sets our user error - currently inactive - then logs an error
    function renderUserError(error){
      setUserError(true)
      console.log('Oops... ', error.statusText)
    } 

  return (
    <Box sx={{flexGrow: 1}}>
        <Grid container
        gap={2}
        direction="row"
        justifyContent="space-around"
        alignItems="stretch">
        <Grid item xs={4}>

                <TextField id="gallery-start-title" 
                value={newGalleryEstablish.title} 
                name="title"
                onChange={handleGalleryStartChange}
                variant="standard"
                />
                <TextField id="gallery-start-title" 
                value={newGalleryEstablish.description} 
                name="description"
                onChange={handleGalleryStartChange}
                variant="standard"
                />
        </Grid> 
        <Grid item sm={4}>
                <FeaturedImageUpload onGalleryStartChange={handleGalleryStartChange} />
        </Grid>
        <Grid item lg={4}>
                <Button
                variant="outlined" 
                color="secondary"
                component="label"
                onClick={fakeHandleSubmit}>
                    Start it
                {/* <input
                type="submit"
                value="Submit"
                hidden/> */}
                </Button>
        </Grid>
      </Grid>

    </Box>
  )
}

export default GalleryStart