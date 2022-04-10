import React from 'react'
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';


function ImageTextBlock( {block} ) {
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
    height: "90vh",
    display: "block",
    textAlign: "center",
    position: "relative",
    backgroundImage: `url(${image_src})`,
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
    backgroundPosition: "center"
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
        <Typography mt={0} style={textStyle} variant="body1">{text}</Typography>
        {/* <img style={imageStyle} src={image_src}/> */}
    </Box>
  )
}

export default ImageTextBlock