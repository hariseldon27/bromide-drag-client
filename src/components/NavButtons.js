import React from 'react'
import { NavLink, Navigate } from "react-router-dom";



function NavButtons() {

  let activeStyle = {
    textDecoration: "none",
    backgroundColor: "primary.main",
    color: "#fff"
  };
  
  
  return (
    <div>
      <NavLink to="/" 
        className="nav"
        style={({ isActive }) =>
              isActive ? activeStyle : undefined
            }
        >Home</NavLink>

        <NavLink to="/profile" 
        className="nav"
        style={({ isActive }) =>
        isActive ? activeStyle : undefined
        }
        >Profile</NavLink>
    </div>
  )
}

export default NavButtons