import React from 'react'
import { NavLink, Navigate } from "react-router-dom";
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import CollectionsOutlinedIcon from '@mui/icons-material/CollectionsOutlined';
import AccountBoxOutlinedIcon from '@mui/icons-material/AccountBoxOutlined';
import BalconyOutlinedIcon from '@mui/icons-material/BalconyOutlined';
import PlayCircleFilledWhiteOutlinedIcon from '@mui/icons-material/PlayCircleFilledWhiteOutlined';
import AddPhotoAlternateIcon from '@mui/icons-material/AddPhotoAlternate';

function NavButtons() {

  let activeStyle = {
    textDecoration: "none",
    backgroundColor: "primary.main",
    color: "lightblue",
    border: "solid 1px lightblue"
  };
  const inActiveStyle = {
    textDecoration: "none",
    color: "pink"

  }

  return (
    <div>
      <Stack 
      direction="row"
      justifyContent="flex-end"
      alignItems="center"
      spacing={2}
      className="header" 
      >
      <NavLink to="/" 
        className="nav"
        style={({ isActive }) =>
              isActive ? activeStyle : inActiveStyle
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
        <Button variant="outline">
            <AccountBoxOutlinedIcon/>
        </Button>
      </NavLink>
      <NavLink to="/gallery-builder" 
        className="nav"
        style={({ isActive }) =>
        isActive ? activeStyle : inActiveStyle
        } >
        <Button variant="outline">
          <AddPhotoAlternateIcon />
        </Button>
      </NavLink>
      <NavLink to="/gallery-presentation" 
        className="nav"
        style={({ isActive }) =>
        isActive ? activeStyle : inActiveStyle
        } >
        <Button variant="outline">
          <PlayCircleFilledWhiteOutlinedIcon />
        </Button>
      </NavLink>
      </Stack>
    </div>
  )
}

export default NavButtons