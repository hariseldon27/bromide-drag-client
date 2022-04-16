import React from 'react'
import { NavLink, Navigate } from "react-router-dom";
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import CollectionsOutlinedIcon from '@mui/icons-material/CollectionsOutlined';
import AccountBoxOutlinedIcon from '@mui/icons-material/AccountBoxOutlined';
import BalconyOutlinedIcon from '@mui/icons-material/BalconyOutlined';
import PlayCircleFilledWhiteOutlinedIcon from '@mui/icons-material/PlayCircleFilledWhiteOutlined';
import AddPhotoAlternateIcon from '@mui/icons-material/AddPhotoAlternate';
import AddPhotoAlternateOutlinedIcon from '@mui/icons-material/AddPhotoAlternateOutlined';
import { useDispatch, useSelector } from "react-redux"
import { setStep, setGalleryInEdit } from "../reducers/gallerySlice"

function NavButtons() {
  const dispatch = useDispatch()
  const currentUser = useSelector(state => state.user)
  // console.log(currentUser.loggedIn)

  let activeStyle = {
    textDecoration: "none",
    backgroundColor: "primary.main",
    color: "lightblue",
    border: "solid 1px lightblue",
    pointerEvents: currentUser.loggedIn ? "auto" : "none"
  };
  const inActiveStyle = {
    textDecoration: "none",
    color: "pink",
    pointerEvents: currentUser.loggedIn ? "auto" : "none"
  }
  let homeActiveStyle = {
    textDecoration: "none",
    backgroundColor: "primary.main",
    color: "lightblue",
    border: "solid 1px lightblue",
  };
  const homeInActiveStyle = {
    textDecoration: "none",
    color: "pink",
  }
  const newGal = {
    
  }
  function handleNewGalClick(){
    dispatch(setGalleryInEdit(newGal))
    dispatch(setStep("start"))
  }



  return (
    <div>
      <Stack 
      direction="row"
      justifyContent="flex-end"
      alignItems="center"
      spacing={2}
      className="header" 
      id="navStack"
      >
      <NavLink to="/" 
        className="nav"
        style={({ isActive }) =>
              isActive ? homeActiveStyle : homeInActiveStyle
            } >
        <Button variant="outline">
            <BalconyOutlinedIcon/>
        </Button>
      </NavLink>
      <NavLink to="/profile" 
        className="nav"
        style={({ isActive }) =>
        isActive ? activeStyle : inActiveStyle
        } >
        <Button disabled={!currentUser.loggedIn} variant="outline">
            <AccountBoxOutlinedIcon/>
        </Button>
      </NavLink>
      <NavLink to={ "/gallery-builder" }
        className="nav"
        style={({ isActive }) =>
        isActive ? activeStyle : inActiveStyle
        } >
        <Button onClick={handleNewGalClick} disabled={!currentUser.loggedIn} variant="outline">
          <AddPhotoAlternateOutlinedIcon />
        </Button>
      </NavLink>
      {/* <NavLink to="/gallery-presentation" 
        className="nav"
        style={({ isActive }) =>
        isActive ? activeStyle : inActiveStyle
        } >
        <Button disabled={!currentUser.loggedIn} variant="outline">
          <PlayCircleFilledWhiteOutlinedIcon />
        </Button>
      </NavLink> */}
      </Stack>
    </div>
  )
}

export default NavButtons