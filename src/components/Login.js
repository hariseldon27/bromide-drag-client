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
    function handleSubmitLoginForm(e){
        //send form data
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
                <Input id="login-password" 
                type="password" 
                placeholder="password" 
                value={loginFormData.password} 
                name="password"
                onChange={handleLoginFormChange}
                />
                <Button id="login-submit" 
                type="submit" 
                name="submit"
                onClick={handleSubmitLoginForm}>Sign In</Button>
                Email: {loginFormData.email}
                <hr/>
                pw: {loginFormData.password}
            </FormControl>
        </Stack>
    </Box>
  )
}

export default Login