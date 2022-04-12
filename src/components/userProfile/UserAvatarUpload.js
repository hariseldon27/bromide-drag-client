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
import { setUserAvatar } from "../../reducers/userSlice"
import { showSpinner } from "../../reducers/spinnerSlice"


function UserAvatarUpload() {
  const dispatch = useDispatch()
  const currentUser = useSelector(state => state.user)
  const [avatarImageUpload, setAvatarImageUpload] = useState()
  const [userError, setUserError] = useState(false)

  
function handleImageChange(e){
  setAvatarImageUpload(e.target.files[0]);
}

// console.log(currentUser)
// console.log(currentUser.avatar)
// console.log(avatarImageUpload)

const handleSubmit = e => {
  dispatch(showSpinner());
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
      dispatch(setUserAvatar({
        avatar: data.avatar
    }))
    dispatch(showSpinner());

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
    dispatch(showSpinner());

  }

  // plz refactor the uploader to be a drag and drop based on this: https://codepen.io/beljems/pen/LYNZYNy

const Input = styled('input')({
    textAlign: "center"
  });
  return (
    <Box>
      <Stack>
        <Typography component="h4">Add profile photo</Typography>
        <form onSubmit={handleSubmit} id='upload'>
          {/* <Input type="file" accept="image/*" multiple={false} onChange={handleImageChange} />
          <Input type="submit" value="Submit"></Input> */}
          <Button
            variant="outlined"
            component="label"
          >
          Choose File
          <input
            type="file"
            hidden
            accept="image/*" multiple={false} onChange={handleImageChange} 
          />
        </Button>
          <Button
            variant="outlined"
            component="label"
          >
          Uploadify it
          <input
            type="submit"
            value="Submit"
            hidden
          />
        </Button>
        </form>
      </Stack>
    </Box>
  )
}

export default UserAvatarUpload