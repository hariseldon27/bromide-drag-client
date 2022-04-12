import React, { useEffect, useState } from 'react'
import Grid from '@mui/material/Grid';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import BlockListCard from './BlockBuilder/BlockListCard';
import Stack from '@mui/material/Stack';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';
import BlockBuilder from './BlockBuilder/BlockBuilder';
import CancelPresentationOutlinedIcon from '@mui/icons-material/CancelPresentationOutlined';
import { useDispatch, useSelector } from "react-redux"
import { setStep, setGalleryInEdit } from '../../reducers/gallerySlice'



//fake dataset for dev
import dummyDataBlocks from './dummyDataBlocks.json'

function BlockList( {  } ) {
  const [blockListInEdit, setBlockListInEdit] = useState([])
  const [blockBuilderShowing, setBlockBuilderShowing] = useState(false)
  const dispatch = useDispatch()
  const currentUser = useSelector(state => state.user)
  const gallery = useSelector(state => state.gallery)
  const step = useSelector(state => state.step)
  console.log(gallery)

 //
  
  useEffect(() => {
    // debugger
    fetch(`http://localhost:3000/gallery/${gallery.id}/blocks`,{
      method: 'GET',
      headers: {
        "Authorization": `Bearer ${currentUser.token}`
        }
    })
    .then((r) => r.json())
    .then((d) => {
      console.log(`fetch r:`, d)
      // debugger
      setBlockListInEdit(d)
    }) 
  }, [])


 function handleAddNewBlock() {
   console.log("click")
    setBlockBuilderShowing(true)
 }
 function handleCloseBlockBuilder() {
   console.log("closebb")
   setBlockBuilderShowing(false)
 }
 const blockListStyle = {
  padding: "15px",
  width: "100%",
  minWidth: "250px"
 }

//  Need to keep "current gallery in edit" in state?  or drill it down from top?
 function BlockBuilderInset() {
      return (
        <Box>
          <Button onClick={handleCloseBlockBuilder} ><CancelPresentationOutlinedIcon /></Button>
          <BlockBuilder />
        </Box>
        )
  }

 

 const blockListCards = gallery.id === 1 ? null : blockListInEdit.map(block => <BlockListCard block={block} /> )
  return (
    <Stack 
    spacing={2} 
    style={blockListStyle}
    direction="column"
    justifyContent="center"
    alignItems="center"
  >
      <Typography variant="h4" component="h3">your gallery so far</Typography>
        {blockListCards}
        <Button onClick={handleAddNewBlock}>Add Block</Button>
        
        {blockBuilderShowing ? <BlockBuilderInset /> : null }
    </Stack>

  )
}

export default BlockList