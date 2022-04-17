import React from 'react'
import Snackbar from '@mui/material/Snackbar';
import MuiAlert from '@mui/material/Alert';
import { useSelector, useDispatch } from "react-redux"
import { cancelError } from "../../reducers/errorSlice"
import { useParams } from 'react-router-dom'
import AutoAwesomeOutlinedIcon from '@mui/icons-material/AutoAwesomeOutlined';

function ErrorHandler() {
    const currentUser = useSelector(state => state.user)
    const error = useSelector(state => state.error)
    const dispatch = useDispatch()
    const params = useParams()

    const handleClose = (e, reason) => {
        if (reason === 'clickaway') {
          return;
        }
        dispatch(cancelError(false))
      } 

      const severitySignal = () => {
        if (error.code === 401) {
            //color with red for unauthorized unless logged in?
            console.log("401 in severity signal")
            return currentUser.loggedIn ? "error" : "pink"
        } else if (error.code > 400) {
            // color with red
            return "error"
        } else if (error.code > 400 ) {
            // color with green or blue or ppink?
            return "lightblue"
        } else if (!error.code) {
            return "error"
        }
      }

      const alertText = () => {
        if (error.code === 401) {
            //color with red for unauthorized unless logged in?
            return currentUser.loggedIn ? "Oops - logout and try again" : "Welcome...login?"
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
        return <MuiAlert elevation={6}
         ref={ref} variant="filled" 
         {...props} 
         icon={currentUser.loggedIn ? "" : <AutoAwesomeOutlinedIcon/>} 
         severity={severitySignal()}/>;
      });

      
      // function revoke(){
      //   console.log("revoking token and redirecting")
      //   localStorage.removeItem("token")
      //   dispatch(setCurrentUser({
      //     email: "",
      //     token: "",
      //     loggedIn: false
      //   }))
      //   dispatch(setError({
      //     text: "Please Login",
      //     occurred: true, 
      //     code: 401
      //   }))
      // }

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