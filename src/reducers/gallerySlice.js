import { createSlice } from "@reduxjs/toolkit"

//slice
const slice = createSlice( {
    name: 'gallery',
    initialState: {
            id:"",
            title: "",
            description: "",
            step: "start"
    },
    reducers : {

        setStep: (state, action) => {
            state.step = action.payload
        },
        setGalleryInEdit: (state, action) => {
            state.title = action.payload.title
            state.description = action.payload.description
            state.id = action.payload.id
        }
    }
} )

// actions
const { setStep, setGalleryInEdit } = slice.actions

// exports
export { setStep, setGalleryInEdit } 
export default slice.reducer
