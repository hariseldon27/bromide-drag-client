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


function UserAvatarUpload() {
  const currentUser = useSelector(state => state.user)
  const [avatarImageUpload, setAvatarImageUpload] = useState()

  
function handleImageChange(e){
  console.log.apply("change")
  setAvatarImageUpload(e.target.files[0]);

}
console.log(currentUser)
console.log(currentUser.avatar)
console.log(avatarImageUpload)

const handleSubmit = e => {
  e.preventDefault();
  const formData = new FormData()
  formData.append("avatar", avatarImageUpload)
  fetch(`http://localhost:3000/profile-photo/${currentUser.id}`, {
    method: 'PATCH',
    headers: {
      "Authorization": `Bearer ${currentUser.token}`
      },
    body: formData
  })
  // .then(res => res.json())
  .then(function(response) {
    console.log(response);
    console.log(response.body);
    console.log(response.message);
    console.log(response.errors);
    console.log(response.json());

    if (response.status >= 400) {
        throw new Error("Bad response from server");
    }

})

  // .then(data => {
  //   // setAvatarImage(data.avatar.url)
  //   console.log(data)
  
  // })
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

export default UserAvatarUpload