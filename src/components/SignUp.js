import React, { useState } from 'react'
import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';
import { FormControl } from '@mui/material';
import Input from '@mui/material/Input';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import { useDispatch } from "react-redux"
import { useSelector } from "react-redux"

function SignUp() {
    const [signUpFormData, setsignUpFormData] = useState({
        email: "",
        password: ""
    })
    function handlesignUpFormChange(e){
        e.preventDefault()
        //set form data
        const name = e.target.name
        let value = e.target.value
        setsignUpFormData({
        ...signUpFormData, 
        [name]: value})
    }
    function handleSubmitsignUpForm(e){
        //send form data
        const userToSignUp = {
            user: {
                email: signUpFormData.email,
                password: signUpFormData.password
            }
        }
        console.log(JSON.stringify(userToSignUp))
        fetch('http://localhost:3000/users', {
        method: "POST",
            headers: {
            "Content-Type": "application/json",
            },
            body: JSON.stringify(userToSignUp),
        })
        .then(response => response.json())
        .then(data => logInUser(data))
    }

    function logInUser(user){
        console.log(user)
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
                onClick={handleSubmitsignUpForm}>Sign Up</Button>
                Email: {signUpFormData.email}
                <hr/>
                pw: {signUpFormData.password}
            </FormControl>
        </Stack>
    </Box>
  )
}

export default SignUp