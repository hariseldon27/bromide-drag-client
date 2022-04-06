import React from 'react'
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import { useDispatch, useSelector } from "react-redux"
import { setCurrentUser, loggedIn } from "../reducers/userSlice"


function LogOut() {
    const dispatch = useDispatch()
    const currentUser = useSelector(state => state.user)
    const loggedIn = useSelector(state => state.user.loggedIn)
    // console.log("logging out currentUser:", currentUser)
    function handleLogOut(e){
      e.preventDefault()
        //get token from state, send token to backend delete route
        // need to get currentUser into redux state
        dispatch(setCurrentUser({
            email: "",
            token: "",
            loggedIn: false
        }))
        revoke()
    }
    // needs to fetch to destroy token
    async function revoke(){

      // const token = `Bearer ${currentUser.token}`
      console.log(currentUser.token)
      fetch('http://localhost:3000/users/sign_out', {
        method: "DELETE",
        headers: {
          "Content-Type": "application/json",
          "Authorization": currentUser.token
        }
      })
      .then(r => r.json())
      .then((data) => console.log("back from server", data))
    }
// console.log(currentUser.token)
  return (
    <Box>
        {loggedIn ? 
        <Button variant="outline-dark" onClick={handleLogOut} id="logout-button" name="logout">Log Out</Button>
        :
        <Button variant="outline-dark" disabled onClick={handleLogOut} id="logout-button" name="logout">Log Out</Button>
        }
    </Box>
  )
}

export default LogOut