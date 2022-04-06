import React from 'react'
import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import Divider from '@mui/material/Divider';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import PhotoCamera from '@mui/icons-material/PhotoCamera';
import { styled } from '@mui/material/styles';

const Input = styled('input')({
    display: 'none',
  });
function UserUpload() {
  return (
    <Box>
        <label htmlFor="user-file-upload">
        <Input accept="image/*" id="user-file-upload" multiple type="file" />
        <Button variant="contained" component="span">
        Upload Profile Image
        </Button>
        </label>
        <label htmlFor="icon-button-file">
        <Input accept="image/*" id="icon-button-file" type="file" />
        <IconButton color="primary" aria-label="upload picture" component="span">
        <PhotoCamera />
    </IconButton>
    </label>
    </Box>
  )
}

export default UserUpload