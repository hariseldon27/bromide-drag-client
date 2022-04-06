import React, { useState } from 'react'
import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';
import { FormControl } from '@mui/material';
import Input from '@mui/material/Input';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import { useDispatch } from "react-redux"
import { useSelector } from "react-redux"

function Login() {
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

    // function handleSubmitLoginForm(e){
    //     //make an action
    //     const logMeIn = user => ({
    //         type: 'users/setCurrentUser',
    //         payload: currentUserLogIn
    //     });
        
    //     // format form data to send
    //     const userToLogIn = {
    //         user: {
    //             email: loginFormData.email,
    //             password: loginFormData.password
    //         }
    //     }
    //     // do the fetch with our user info from form
    //     fetch('http://localhost:3000/users/sign_in', {
    //     method: "POST",
    //         headers: {
    //         "Content-Type": "application/json",
    //         },
    //         body: JSON.stringify(userToLogIn),
    //     })


    //     const currentUserLogIn = {
    //         email: loginFormData.email,
    //         token: responseData.token
    //     }


    //     //take response data, send to redux state:
    //     // email: loginFormData.email, 
    //     // token: data.token

    //     .then(response => response.json())
    //     .then(data => logInUser(data))
    // }

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
        const newData = await response.json()
        console.log(newData.token)
        
    }

    


    function logInUser(user){
        console.log(user)
        //send user response to state reducer
    }


  return (
    <Box>
        <Stack>
            <FormControl>
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
                Email: {loginFormData.email}
                <hr/>
                pw: {loginFormData.password}
            </FormControl>
        </Stack>
    </Box>
  )
}

export default Login