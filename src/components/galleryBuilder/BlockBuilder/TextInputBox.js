import React, { useState } from 'react'
import TextareaAutosize from '@mui/material/TextareaAutosize';
import Box from '@mui/material/Box';

function TextInputBox() {

  // send textInput up to editor through cb func
  const [textInput, setTextInput] = useState("")

  function handleTextInputChange(e){
    setTextInput(...textInput, e.target.value)
  }
  return (
    <Box>
      <TextareaAutosize
        aria-label="empty textarea"
        placeholder="Empty"
        style={{ width: 200 }}
        onChange={handleTextInputChange}
        value="textInput"
      />
      {textInput}
    </Box>
  );
}

export default TextInputBox