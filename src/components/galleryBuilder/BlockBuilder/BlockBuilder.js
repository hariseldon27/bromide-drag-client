import React, {useState} from 'react'
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';

import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Input from '@mui/material/Input';

function BlockBuilder() {

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


  function handleFormChange(e){
    const name = e.target.name;
    let value = e.target.value;
    setNewBlock({...newBlock, [name]: value})
  }
  return (
  

<Box sx={{flexGrow: 1}}>
        <Grid container
        gap={2}
        direction="row"
        justifyContent="space-around"
        alignItems="stretch">
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
              />
        </Grid>
        <Grid item xs={3}>
              <TextField id="new-block-bgcolor" 
                label="bgcolor"
                helperText="hex code plz"
                value={newBlock.textAlign} 
                name="textAlign"
                onChange={handleFormChange}
                variant="standard"
              />
        </Grid>
        <Grid item xs={3}>
              <TextField id="new-block-bgcolor" 
                label="block type"
                helperText="img, text, imgText"
                required
                value={newBlock.type} 
                name="type"
                onChange={handleFormChange}
                variant="standard"
              />
        </Grid>
      </Grid>

    </Box>
  
  )
}

export default BlockBuilder