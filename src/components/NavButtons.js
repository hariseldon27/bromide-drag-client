import React from 'react'
import { NavLink, Navigate } from "react-router-dom";
import Button from '@mui/material/Button';




function NavButtons() {

  let activeStyle = {
    textDecoration: "none",
    backgroundColor: "primary.main",
    color: "#fff"
  };
  const inActiveStyle = {
    textDecoration: "none",
    color: "#000000"

  }

  return (
    <div>
      <NavLink to="/" 
        className="nav"
        style={({ isActive }) =>
              isActive ? activeStyle : inActiveStyle
            } >
        <Button variant="outline">
            Home
        </Button>
      </NavLink>
      <NavLink to="/profile" 
        className="nav"
        style={({ isActive }) =>
        isActive ? activeStyle : inActiveStyle
        } >
        <Button variant="outline">
            Profile
        </Button>
      </NavLink>
    </div>
  )
}

export default NavButtons