import React from 'react'
import Backdrop from '@mui/material/Backdrop';
import CircularProgress from '@mui/material/CircularProgress';
import { useDispatch, useSelector } from "react-redux"
import { showSpinner } from '../reducers/spinnerSlice'

function Spinner() {
    const dispatch = useDispatch()
    const isSpinnerShowing = useSelector(state => state.spinner.isSpinnerShowing)
    // const [open, setOpen] = React.useState(isSpinnerShowing);
    const handleClose = () => {
      dispatch(showSpinner());
    };

    
  return (
    <Backdrop
    sx={{ color: '#fff', zIndex: (theme) => theme.zIndex.drawer + 1 }}
    open={isSpinnerShowing}
    onClick={handleClose}
  >
    <CircularProgress color="inherit" />
  </Backdrop>
  )
}

export default Spinner