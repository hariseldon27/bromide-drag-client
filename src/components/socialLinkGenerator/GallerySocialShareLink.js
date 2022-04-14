import React, { useEffect, useState } from 'react'
import Loading from './Loading'
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import ShareIcon from '@mui/icons-material/Share';

import RandomLinkStringGenerator from './RandomLinkStringGenerator'
import useRandoLinkGenny from './useRandoLinkGenny'
 
function GallerySocialShareLink( { share_url, gallery_id } ) {
  const [showLoading, setShowLoading] = useState(false)
  const [newShareLink, setNewShareLink] = useState("")
  const [isShareable, setIsShareable] = useState(false)
  const randoLink = useRandoLinkGenny()
  
  function handleGenerateClick(e){
    // click on button and it creates a string with random string generator
    // write the string to the DB as the "share_url" with URL prefixed already
    // when OK comes back from DB, use confirmed received URL as that displayed 
    // have the card show either "Generate Link" or the link to copy if no link
    // exists in the DB
    console.log("click")
    setShowLoading(true)
    // const linkString = randoLink
    setTimeout(() => {setShowLoading(false)}, 2000)
    //lnk the set state to the fetch return
    setIsShareable(true)
  }

  useEffect(() => {
    setIsShareable((isShareable) => share_url ? true : false)
  },[])

  function updateGallery(gallery_id) {
    fetch('http://localhost:3000/')
  }

  function WatchLoading(){
    setTimeout(() => {<Loading/>}, 1000);
  }

  function ShareURL(){
    return <>{share_url}</>
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
    <Box>
      
      <ShareIcon/>{share_url ? share_url : <> <Button onClick={handleGenerateClick}>Genrate Sharable Link</Button> <RandomLinkStringGenerator/> </>}
        
        {showLoading ? <Loading/> : null }

    </Box>
  )
}

export default GallerySocialShareLink