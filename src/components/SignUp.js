import React, { useState } from 'react'
import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';
import { FormControl } from '@mui/material';
import Input from '@mui/material/Input';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import { useDispatch } from "react-redux"
import { useSelector } from "react-redux"
import { setCurrentUser } from "../reducers/userSlice"
import { showSpinner } from "../reducers/spinnerSlice"
import { useNavigate } from 'react-router-dom'
import { setError } from "../reducers/errorSlice"


function SignUp() {
    const dispatch = useDispatch()
    const navigate = useNavigate();
    const currentUser = useSelector(state => state.user)
    const [signUpFormData, setSignUpFormData] = useState({
        email: "",
        password: ""
    })
    function handlesignUpFormChange(e){
        e.preventDefault()
        //set form data
        const name = e.target.name
        let value = e.target.value
        setSignUpFormData({
            ...signUpFormData, 
            [name]: value})
    }

    console.log("curUser in state: ", currentUser)

    async function handleSubmitSignUp(){
        dispatch(showSpinner());

        const userToSignUp = {
            user: {
                email: signUpFormData.email,
                password: signUpFormData.password
            }
        }
        console.log("sending this to server", JSON.stringify(userToSignUp))
        const response = await fetch('http://localhost:3000/users', {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(userToSignUp)
        })
        const authUser = await response.json()
        console.log(authUser.user.email)

        dispatch(setCurrentUser({
            email: authUser.user.email,
            password: signUpFormData.password,
            token: authUser.token,
            loggedIn: true
        }))
        localStorage.setItem("token", authUser.token)
        console.log(authUser.token)
        resetForm()
        moveMe()

        dispatch(showSpinner());
        
    }
    async function handleSubmitSignUp2(){
        dispatch(showSpinner());

        const userToSignUp = {
            user: {
                email: signUpFormData.email,
                password: signUpFormData.password
            }
        }
        console.log("sending this to server", JSON.stringify(userToSignUp))
        await fetch('http://localhost:3000/users', {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(userToSignUp)
        })
        .then((response) => {
            let json = response.json()
            if (response.status >= 200 && response.status < 300) {
              return json;
            }
            return json.then(Promise.reject.bind(Promise))
            // return Promise.reject(response)
        })
          .then((authUser) => {
              console.log(authUser)
            dispatch(setCurrentUser({
                email: authUser.user.email,
                password: signUpFormData.password,
                token: authUser.token,
                loggedIn: true
            }))
            localStorage.setItem("token", authUser.token)
            moveMe()
            dispatch(showSpinner());
          })
          .catch((error) => {
              console.log(error)

            renderUserError(error)
            // dispatch(showSpinner())
            resetForm()
          })

        // const authUser = await response.json()
        // console.log(authUser.user.email)

        // console.log(authUser.token)

        dispatch(showSpinner());
        
    }

    function renderUserError(error) {
        console.log(error.error.statusText)
        console.log(error.error.status)
        const newError = {
          text: error.statusText || error.error.statusText,
          occurred: true, 
          code: error.error.status || error.status
        }

        dispatch(setError(newError))
      }

    function moveMe(){
        navigate("/profile", {replace: true})
    }
    
    function resetForm(){
        setSignUpFormData({
            ...signUpFormData, 
            email: "",
            password: ""
            })
    }


  return (
    <Box>
        <Stack>
            <FormControl>
                <Input id="signup-email" 
                placeholder="email" 
                value={signUpFormData.email} 
                name="email"
                onChange={handlesignUpFormChange}
                />
                <TextField id="signup-password" 
                type="password" 
                placeholder="password" 
                value={signUpFormData.password} 
                name="password"
                onChange={handlesignUpFormChange}
                variant="standard"
                />
                <Button id="signup-submit" 
                type="submit" 
                name="submit"
                variant="contained"
                color="secondary"
                onClick={handleSubmitSignUp2}>Sign Up</Button>
            </FormControl>
        </Stack>
    </Box>
  )
}

export default SignUp