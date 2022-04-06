import { createSlice } from "@reduxjs/toolkit"

//slice
const slice = createSlice( {
    name: 'user',
    initialState: {
            email:"",
            token: ""
    },
    reducers : {
        setCurrentUser: (state, action) => {
             state.email = action.payload.email
             state.token = action.payload.token
        }
    }
} )

// actions
const { setCurrentUser } = slice.actions

// exports
export { setCurrentUser } 
export default slice.reducer
