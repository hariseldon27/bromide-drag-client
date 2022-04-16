import React, {useState, useEffect} from 'react'
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';

import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Input from '@mui/material/Input';
import ImageUploadButton from '../../ImageUploadButton';
import { setStep } from '../../../reducers/gallerySlice'
import { useDispatch, useSelector } from "react-redux"

import { showSpinner } from '../../../reducers/spinnerSlice'
import CloseFullscreenIcon from '@mui/icons-material/CloseFullscreen';
import OpenInFullIcon from '@mui/icons-material/OpenInFull';


function BlockBuilder( { userError, setUserError, setRefresh } ) {
  const [blockImage, setBlockImage] = useState("")
  const [compactMode, setCompactMode] = useState(true)
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
    dispatch(showSpinner())
    console.log('hello')
    e.preventDefault();
    console.log("clicked add block")
    const formData = new FormData()
    formData.append("gallery_id", gallery.id)
    if (blockImage) formData.append("image", blockImage)
    formData.append("text", newBlock.text)
    formData.append("bg_color", newBlock.bgColor)
    formData.append("font_color", newBlock.fontColor)
    formData.append("width", newBlock.width)
    formData.append("text_align", newBlock.textAlign)
    formData.append("font", newBlock.font)
    formData.append("block_type", newBlock.type)
    fetch(`http://localhost:3000/new-block/`, {
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
        console.log("block came back as ", data); 
        dispatch(setStep("manage"))
        dispatch(showSpinner())
        

      })
      // if there is an error then send the error info to a handler
      .catch((error) => {
        console.log(error)
        renderUserError(error)
      });
    }
    //this sets our user error - currently inactive - then logs an error
    function renderUserError(error){
      // setUserError(true)
      console.log('Oops... ', error.statusText)
    }

    function handleCompactModeToggle(){
      setCompactMode(compactMode => compactMode = !compactMode)
    }
    const compactComponent = {
      display: compactMode ? 'none' : 'block'
    }
  return (
  

<Box sx={{flexGrow: 1}}>
        <Grid container
        gap={2}
        direction="row"
        justifyContent="space-around"
        alignItems="stretch">
            <Grid  item xs={3}>
              <TextField id="new-block-type" 
                label="block type"
                helperText="image, text, imgText"
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
        <Grid style={compactComponent} item xs={3}>
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

        <Grid style={compactComponent} item xs={3}>
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
        <Grid style={compactComponent} item xs={3}>
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
        <Grid style={compactComponent} item xs={3}>
              <TextField id="new-block-textalign" 
                label="text align"
                helperText="left right center"
                value={newBlock.textAlign} 
                name="textAlign"
                onChange={handleFormChange}
                variant="standard"
                disabled
              />
        </Grid>
        <Button sx={{color: "pink", backgroundColor: "darkgrey"}} 
        onClick={handleCompactModeToggle} 
        >{compactMode ?  <OpenInFullIcon/> : <CloseFullscreenIcon/>} </Button>


        <Grid container
        gap={2}
        direction="row"
        justifyContent="space-around"
        alignItems="stretch">

          <Grid item sm={4}>
            <ImageUploadButton onImageChange={handleImageAdd} />
          </Grid>
          <Grid item xs={1}>
          <Button variant="contained" color="secondary" onClick={handleSubmit}>Add Block to Gallery</Button>

          </Grid>
        </Grid>
      </Grid>

    </Box>
  
  )
}

export default BlockBuilder