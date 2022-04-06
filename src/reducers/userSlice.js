import { createSlice } from "@reduxjs/toolkit"

//slice
const slice = createSlice( {
    name: 'user',
    initialState: {
            email:"",
            token: "",
            loggedIn: false
    },
    reducers : {

        setCurrentUser: (state, action) => {
            state.email = action.payload.email
            state.token = action.payload.token
            state.loggedIn = action.payload.loggedIn

        }
    }
} )

// actions
const { setCurrentUser } = slice.actions

// exports
export { setCurrentUser } 
export default slice.reducer
