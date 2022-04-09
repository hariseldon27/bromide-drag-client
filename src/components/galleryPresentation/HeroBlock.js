import React from 'react'
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import { useDispatch, useSelector } from "react-redux"





function HeroBlock() {
    const dispatch = useDispatch()
    const currentUser = useSelector(state => state.user)

  return (
    <Paper>
    <img className="hero-image" src=""></img>    

    </Paper>
  )
}

export default HeroBlock