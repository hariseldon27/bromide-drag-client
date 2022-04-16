import React from 'react'
import Snackbar from '@mui/material/Snackbar';
import MuiAlert from '@mui/material/Alert';
import { useSelector, useDispatch } from "react-redux"
import { cancelError, setError } from "../../reducers/errorSlice"

function ErrorHandler() {
    const currentUser = useSelector(state => state.user)
    const error = useSelector(state => state.error)
    const dispatch = useDispatch()

    const handleClose = (e, reason) => {
        if (reason === 'clickaway') {
          return;
        }
        dispatch(cancelError(false))
      } 

      const severitySignal = () => {
        if (error.code === 401) {
            //color with red for unauthorized unless logged in?
            return currentUser.loggedIn ? "secondary" : "error"
        } else if (error.code > 400) {
            // color with red
            return "error"
        } else if (error.code > 400 ) {
            // color with green or blue or ppink?
            return "secondary"
        } else if (!error.code) {
            return "error"
        }
      }

      const alertText = () => {
        if (error.code === 401) {
            //color with red for unauthorized unless logged in?
            return currentUser.loggedIn ? "Oops - logout and try again" : "Oops - please login"
        } else if (error.code > 400) {
            // color with red
            return error.text
        } else if (error.code < 400 ) {
            // color with green or blue or ppink?
            return error.text
        } else if (!error.text) {
            return "Oops - earth imploded...try again l8r"
        }
      }
      const Alert = React.forwardRef(function Alert(props, ref) {
        return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} severity={severitySignal()}/>;
      });

      console.log(error)
  return (
    <>
        
        <Snackbar
                open={error.occurred}
                autoHideDuration={2000}
                onClose={handleClose}
                >
                  <Alert >{alertText()}</Alert>
        </Snackbar>
    </>
  )
}

export default ErrorHandler