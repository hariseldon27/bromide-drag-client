import React, { useState } from 'react'
import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import Divider from '@mui/material/Divider';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import PhotoCamera from '@mui/icons-material/PhotoCamera';
import { styled } from '@mui/material/styles';
import { useDispatch, useSelector } from "react-redux"



function FeaturedImageUpload( { onGalleryStartChange } ) {
  const dispatch = useDispatch()
  const currentUser = useSelector(state => state.user)
  const [userError, setUserError] = useState(false)
  const [uploadImage, setUploadImage] = useState()

  
function handleImageChange(e){
    // console.log(e.target.files[0].name)
    setUploadImage(e.target.files[0])
    onGalleryStartChange(e.target.files[0])
}

// console.log(currentUser)
// console.log(currentUser.avatar)
// console.log(avatarImageUpload)

const handleSubmit = e => {
  e.preventDefault();
  const formData = new FormData()
  formData.append("featuredImage", uploadImage)
  fetch(`http://localhost:3000/new-photo/${currentUser.id}`, {
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
      // console.log("came back as ", data); 
      // console.log(data.user)
      // console.log(data.avatar)
    //   dispatch(setUserAvatar({
    //     avatar: data.avatar
    // }))
    })
    // if there is an error then send the error info to a handler
    .catch((error) => {
      console.log(error)
      renderUserError(error)
    });
  }
  //this sets our user error - currently inactive - then logs an error
  function renderUserError(error){
    setUserError(true)
    console.log('Oops... ', error.statusText)
  }

  // plz refactor the uploader to be a drag and drop based on this: https://codepen.io/beljems/pen/LYNZYNy

function FileNameDisplay() {
    if (uploadImage) {
        let displayText = uploadImage.name
        if (displayText.length > 13) {
            const str = displayText.substring(0,13)
            return str + "..."
        } else if (uploadImage) {
            return displayText
        }
    } else {
        return "Choose File"
    }
}
  return (
    <Box>
        <Typography variant="overline">featured image</Typography>
        <form onSubmit={handleSubmit} id='upload'>
            <Button
            variant="outlined"
            component="label">
                <FileNameDisplay/>
                <input
                type="file"
                hidden
                accept="image/*" multiple={false} onChange={handleImageChange} />
            </Button>
            
        </form>
    </Box>
  )
}

export default FeaturedImageUpload