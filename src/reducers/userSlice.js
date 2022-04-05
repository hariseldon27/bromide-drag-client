import { createSlice } from "@reduxjs/toolkit"

//slice
const slice = createSlice( {
    name: 'user',
    initialState: {
        username: null,
    },
    reducers : {
        increment: state => {
             state.count += 1 
        }
    }
} )

// actions
const { increment } = slice.actions

// exports
export { increment } 
export default slice.reducer