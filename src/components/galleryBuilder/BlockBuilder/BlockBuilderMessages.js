import React, { useState } from 'react'
import { useDispatch, useSelector } from "react-redux"
import Snackbar from '@mui/material/Snackbar';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import { setShowMessage } from '../../../reducers/gallerySlice'
import QueueOutlinedIcon from '@mui/icons-material/QueueOutlined';
import Grid from '@mui/material/Grid';
import MuiAlert from '@mui/material/Alert';


function BlockBuilderMessages(  ) {
    const dispatch = useDispatch()
    const gallery = useSelector(state => state.gallery)

    const handleClose = (e, reason) => {
        if (reason === 'clickaway') {
          return;
        }
        dispatch(setShowMessage(false))
        console.log("thanks")
      } 

      const Alert = React.forwardRef(function Alert(props, ref) {
        return <MuiAlert elevation={6}
         ref={ref} variant="filled" 
         {...props} 
         icon={<QueueOutlinedIcon  />} 
         color="pink"
         severity={"success"}/>;
      });
      const messageStyle = {
        backgroundColor: "#403033",
        fontSize: "1.5em",
        padding: "1rem",
        borderRadius: "3px",
        color:'lightgreen'
      }


  return (
    <>
        <Snackbar
        open={gallery.showMessage}
        autoHideDuration={1500}
        onClose={handleClose}  
        >

                    <Alert >
                        {gallery.message}
                    </Alert>

        </Snackbar>
    </>
  )
}

export default BlockBuilderMessages