import React, { useState } from 'react'
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';

function BlockCard( block ) {
    console.log(block.block)
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
        width } = block.block

    const blockImgStyle = {
        width: "100%"
    }

    //create block card that can be either full or boxed - start full?
    // start with getting text and image, then settings

    function BlockRender() {
        return (
            <>
                <img src={image_src} style={blockImgStyle} />
                <Typography variant="body2">{imageHeight}</Typography>
            </>
        )
    }
  return (
    <Box>
            <BlockRender />
    </Box>
  )
}

export default BlockCard