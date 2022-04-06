import { createSlice } from "@reduxjs/toolkit"

//slice
const slice = createSlice( {
    name: 'currenUser',
    initialState: {
            email:"",
            token: ""
    },
    reducers : {
        "users/setCurrentUser": state => {
             state.email = payload.email,
             state.token = payload.token
        }
    }
} )

// actions
const { increment } = slice.actions

// exports
export { increment } 
export default slice.reducer
