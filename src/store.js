import { configureStore } from "@reduxjs/toolkit"
import counterReducer from "./reducers/counterSlice";
import themeToggleReducer from "./reducers/themeToggleSlice"

const store = configureStore({
    reducer: {
        'counter': counterReducer,
        'themeToggle': themeToggleReducer   
    }
})

export default store