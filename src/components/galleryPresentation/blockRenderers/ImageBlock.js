import React from 'react'
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';


function ImageBlock( {block} ) {
    console.log(block)
    const {
        bgColor,
        block_id,
        font,
        fontColor,
        gallery_id,
        id,
        imageHeight,
        imageWidth,
        image_src,
        text,
        textAlign,
        type,
        width } = block
// console.log(image_src)

const imageTextBlockStyle = {
    width: "auto",
    minHeight: "90vh",
    display: "block",
    textAlign: "center",
    position: "relative",
    backgroundImage: `url(${image_src})`,
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover"
}

const imageStyle = {
    width: "100%"
}
const textStyle= {
    width: "80%",
    position: "relative",
    top: "20px",
    margin: "0 auto"
}

  return (
    <Box style={imageTextBlockStyle}>

    </Box>
  )
}

export default ImageBlock