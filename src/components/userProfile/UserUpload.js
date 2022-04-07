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


function UserUpload() {
  const currentUser = useSelector(state => state.user)
  const [profilePhoto, setProfilePhoto] = useState()
  const [editProfPic, setEditProfPic] = useState(false)

  
//   function handleSubmit(e) {
//     e.preventDefault()
//     console.log(e.target.files)
//     console.log("submit")
// }

function handleImageChange(e){
  console.log.apply("change")
  setProfilePhoto(e.target.files[0]);

}
console.log(currentUser.avatar)

const handleSubmit = e => {
  e.preventDefault();
  const formData = new FormData()
  formData.append("profile_photo", profilePhoto)
  fetch(`/users/${currentUser.id}`, {
    method: 'PATCH',
    body: formData
  })
  .then(res => res.json())
  .then(data => {
    setProfilePhoto(data.profile_photo.url)
    console.log(data)
  
  })
  setEditProfPic(false)
}

const Input = styled('input')({
    display: 'none',
  });
  return (
    <Box>
        {/* <label htmlFor="user-file-upload">
        <Input accept="image/*" 
        id="user-file-upload" 
        multiple type="file" 
        onChange={handleUploadChange}
        onSubmit={handleUploadClick}/>
        <Button variant="contained" component="span">
        Upload Profile Image
        </Button>
        </label>

        <label htmlFor="icon-button-file">
        <Input accept="image/*" id="icon-button-file" type="file" />
        <IconButton color="primary" aria-label="upload picture" component="span">
        <PhotoCamera />
        </IconButton> */}
      {/* </label> */}
        <form onSubmit={handleSubmit} id='upload'>
          <input type="file" accept="image/*" multiple={false} onChange={handleImageChange} /><br/>
          <input type="submit" value="Submit"></input>
        </form>
    </Box>
  )
}

export default UserUpload