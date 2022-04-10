import React, { useState } from 'react'
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import ImageTextBlock from './blockRenderers/ImageTextBlock';
import ImageBlock from './blockRenderers/ImageBlock';
import TextBlock from './blockRenderers/TextBlock';

function BlockCard( { block } ) {
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
        console.log(type)

    const blockImgStyle = {
        width: "100%"
    }

    //create block card that can be either full or boxed - start full?
    // start with getting text and image, then settings

    function BlockRender() {
            switch (type) {
              case "image":
                return <ImageBlock block={block}/>
                break;
              case "text":
                return <TextBlock block={block}/>
                break;
              case "imageText":
                return <ImageTextBlock block={block} />
                break;
              default: 
                return "thanks"
            }
    }
  return (
    <Box sx={{width: "100%"}}>
            <BlockRender />
    </Box>
  )
}

export default BlockCard