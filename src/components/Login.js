import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';
import { FormControl } from '@mui/material';
import Input from '@mui/material/Input';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import { useDispatch, useSelector } from "react-redux"
import { setCurrentUser } from "../reducers/userSlice"

function Login(e) {
    const dispatch = useDispatch()
    const currentUser = useSelector(state => state.user)
    const navigate = useNavigate();

    const [loginFormData, setLoginFormData] = useState({
        email: "",
        password: ""
    })
    function handleLoginFormChange(e){
        e.preventDefault()
        //set form data
        const name = e.target.name
        let value = e.target.value
        setLoginFormData({
        ...loginFormData, 
        [name]: value})
    }

    console.log("curUser in state: ", currentUser)

  async function login() {
        // format form data to send
        const userToLogIn = {
            user: {
                email: loginFormData.email,
                password: loginFormData.password
            }
        }
        const response = await fetch('http://localhost:3000/users/sign_in', {
            method: "POST",
            headers: {
            "Content-Type": "application/json",
            },
            body: JSON.stringify(userToLogIn),
        })

        const authUser = await response.json()
        console.log(authUser)
       //send the new user to state
        dispatch(setCurrentUser({
            email: loginFormData.email,
            token: authUser.token,
            loggedIn: true,
            id: authUser.id,
            avatar: authUser.avatar
        }))
        // console.log(authUser.token)
        //set the token in local storage
        localStorage.setItem("token", authUser.token)
        resetForm()
    }
    // useEffect(() => {
    //     console.log(currentUser.loggedIn)
    //     if (currentUser.loggedIn) {
    //         navigate('/profile')
    //     }
    // })        
 

    
    function resetForm(){
        setLoginFormData({
            ...loginFormData, 
            email: "",
            password: ""
            })
    }

  return (
    <Box>
        <Stack>
            <FormControl id="login-form">
                <Input id="login-email" 
                placeholder="email" 
                value={loginFormData.email} 
                name="email"
                onChange={handleLoginFormChange}
                />
                <TextField id="login-password" 
                type="password" 
                placeholder="password" 
                value={loginFormData.password} 
                name="password"
                onChange={handleLoginFormChange}
                variant="standard"
                />
                <Button id="login-submit" 
                type="submit" 
                name="submit"
                onClick={login}>Log In</Button>
                <hr/>
                Email: {loginFormData.email}
                <hr/>
                pw: {loginFormData.password}
                <hr/>
            </FormControl>
        </Stack>
    </Box>
  )
}

export default Login