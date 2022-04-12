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
                onClick={handleSubmitSignUp}>Sign Up</Button>
            </FormControl>
        </Stack>
    </Box>
  )
}

export default SignUp