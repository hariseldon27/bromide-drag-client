import React, { useEffect, useState } from 'react'
import Loading from './Loading'
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import ShareIcon from '@mui/icons-material/Share';
import Typography from '@mui/material/Typography';
import FileCopyIcon from '@mui/icons-material/FileCopy';
import Chance from 'chance'
import Collapse from '@mui/material/Collapse';
import Grid from '@mui/material/Grid';


import RandomLinkStringGenerator from './RandomLinkStringGenerator'
 
function GallerySocialShareLink( { share_url, gallery_id } ) {
  const chance = new Chance()
  const [showLoading, setShowLoading] = useState(false)
  const [newShareLink, setNewShareLink] = useState("")
  const [isShareable, setIsShareable] = useState(false)
  const [showShare, setShowShare] = useState(false)
  
  useEffect(() => {
    setNewShareLink(share_url || `http://localhost:3006/share/${makeRandomStr()}`)
    setIsShareable((isShareable) => share_url ? true : false)
  },[])
 
  function handleShowShare(){
    setShowShare((showShare) => !showShare)
  }
  function handleGenerateClick(e){
    // click on button and it creates a string with random string generator
    // write the string to the DB as the "share_url" with URL prefixed already
    // when OK comes back from DB, use confirmed received URL as that displayed 
    // have the card show either "Generate Link" or the link to copy if no link
    // exists in the DB
    setShowLoading(true)
    setTimeout(() => {setShowLoading(false)}, 2000)

    updateGallery(gallery_id)
  }

  const currentToken = localStorage.getItem("token")

  function updateGallery(gallery_id) {
    
    const update = {
      share_url: newShareLink
    }
    console.log("newsharelink to server", newShareLink)
    fetch(`http://127.0.0.1:3000/gallery/${gallery_id}`, {
      method: 'PATCH',
      headers: {
        "Content-Type": "application/json",
        "Authorization": `Bearer ${currentToken}`
        },
        body: JSON.stringify(update),
        })
        .then(r => r.json())
        .then(d => {
          setIsShareable(true)
          setTimeout(() => {setShowLoading(false)}, 1500)
        })
  }


  function ShareableReturn(){
    return (
      <><Typography variant="caption">{newShareLink}</Typography> </>
    )
  }
  function GetLinkReturn(){
    return (
      <><Button onClick={handleGenerateClick}>Get Sharable Link</Button></>
    )
  }

  function LinkOrGenerateButton(){
    return isShareable ? <ShareableReturn /> : <GetLinkReturn />
  }

  function LoadingOrLinkGen(){
    return <Box sx={{ display: 'flex', alignItems: 'center', pr: 1, }}>{showLoading ? <Loading/> : <LinkOrGenerateButton /> } </Box>

  }


  // pasting the genreate code in here because I'm too lazy to crete a custom constructor hook
  const generators = [chance.syllable(),chance.animal(),chance.city(),chance.coin(),chance.word(),chance.cc_type(),chance.weekday(),chance.company(),chance.suffix()]
    function makeRandomStr(){
        const randomNumber = () => { return Math.floor(Math.random() * generators.length)}
        // hold our randomness in this array
        const randomStrArr = []
        for (let i = 0; i < 4; i++  ){
            randomStrArr[i] = generators[randomNumber()]
        }
        // smash strings together, remove characters and spaces, limit to 20, and return it
        const string = randomStrArr.join("").replace(/\s/g, '').replace(/[^a-z0-9]/gi, '').substring(0, 20);
        return string
    }

    const shareIconStyle = {
      color: 'pink',
      
    }

  // three states to switch beteen: 
  // showing url || showing generate button || or temporarily showing loading...  
  // default is either: share_url (if in record) OR the generate link button
  // if share_url is visible state is "sharable"
  // click on generate button puts in 2 second state of:
  // loading...
  // after click on generate button set state to "generating"
  // third state is "newly_sharable" ?? 
  return (
  <Box sx={{flexGrow: 1}}>
        <Grid container
        gap={2}
        direction="row"
        justifyContent="flex-start"
        alignItems="center">
          <Grid item >
            <Collapse in={showShare} >
              <LoadingOrLinkGen /> 
            </Collapse>
          </Grid>
          <Grid item >
            <Button onClick={handleShowShare}><ShareIcon className="shareIcon" style={shareIconStyle} fontSize='small'/></Button>
          </Grid>
    </Grid>
  </Box>
  )
}

export default GallerySocialShareLink