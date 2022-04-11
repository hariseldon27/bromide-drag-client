import React, {useState, useEffect} from 'react'
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';

import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Input from '@mui/material/Input';
import ImageUploadButton from '../../ImageUploadButton';
import { setStep } from '../../../reducers/gallerySlice'
import { useDispatch, useSelector } from "react-redux"

function BlockBuilder( { userError, setUserError, galleryAssociaton } ) {
  const [blockImage, setBlockImage] = useState("")

  const [newBlock, setNewBlock] = useState ({
    // does this need gallery id or image?
    text: "Enter block text",
    bgColor: "none",
    fontColor: "#ffffff",
    width: "full",
    textAlign: "right",
    font: "default",
    type: "image"
  })

  const dispatch = useDispatch()
  const currentUser = useSelector(state => state.user)
  const gallery = useSelector(state => state.gallery)

  // useEffect(() => {
  //   console.log(Object.entries(newBlock))
  // }, [newBlock])
  
  function handleFormChange(e){
    const name = e.target.name;
    let value = e.target.value;
    setNewBlock({...newBlock, [name]: value})
  }


  function handleImageAdd(file){
    setBlockImage(file)
  }

  function handleSubmitFake(e) {
    dispatch(setStep("manage"))
  }

  const handleSubmit = e => {
    e.preventDefault();
    const formData = new FormData()
    formData.append("text", newBlock.text)
    formData.append("bgColor", newBlock.bgColor)
    formData.append("fontColor", newBlock.fontColor)
    formData.append("width", newBlock.width)
    formData.append("textAlign", newBlock.textAlign)
    formData.append("font", newBlock.font)
    formData.append("type", newBlock.type)
    formData.append("image", blockImage)
    fetch(`http://localhost:3000/new-block/${gallery.id}`, {
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
        console.log("came back as ", data); 


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
  return (
  

<Box sx={{flexGrow: 1}}>
        <Grid container
        gap={2}
        direction="row"
        justifyContent="space-around"
        alignItems="stretch">
            <Grid item xs={3}>
              <TextField id="new-block-type" 
                label="block type"
                helperText="img, text, imgText"
                required
                value={newBlock.type} 
                name="type"
                onChange={handleFormChange}
                variant="standard"
              />
        </Grid>
        <Grid item sm={3}>

              <TextField id="new-block-text" 
                helperText="optional"
                label="block text"
                value={newBlock.text} 
                name="text"
                onChange={handleFormChange}
                variant="standard"
              />

        </Grid> 
        <Grid item xs={3}>
              <TextField id="new-block-bgcolor" 
                helperText="hex code plz"
                label="bgColor"
                value={newBlock.bgColor} 
                name="bgColor"
                onChange={handleFormChange}
                variant="standard"
                disabled
              />
        </Grid>

        <Grid item xs={3}>
              <TextField id="new-block-fontcolor" 
                label="fontColor"
                helperText="hex code plz"
                value={newBlock.fontColor} 
                name="fontColor"
                onChange={handleFormChange}
                variant="standard"
                disabled
              />
        </Grid>
        <Grid item xs={3}>
              <TextField id="new-block-width" 
                label="block width"
                helperText="sm md full"
                value={newBlock.width} 
                name="width"
                onChange={handleFormChange}
                variant="standard"
                disabled
              />
        </Grid>
        <Grid item xs={3}>
              <TextField id="new-block-textalign" 
                label="bgcolor"
                helperText="left right center"
                value={newBlock.textAlign} 
                name="textAlign"
                onChange={handleFormChange}
                variant="standard"
                disabled
              />
        </Grid>


        <Grid container
        gap={2}
        direction="row"
        justifyContent="space-around"
        alignItems="stretch">

          <Grid item sm={4}>
            <ImageUploadButton onImageChange={handleImageAdd} />
          </Grid>
          <Grid item xs={1}>
          <Button variant="contained" onClick={handleSubmitFake}>Add Block to Gallery</Button>

          </Grid>
        </Grid>
      </Grid>

    </Box>
  
  )
}

export default BlockBuilder