import { configureStore } from "@reduxjs/toolkit"
import counterReducer from "./reducers/counterSlice";
import themeToggleReducer from "./reducers/themeToggleSlice"
import userReducer from "./reducers/userSlice"

const store = configureStore({
    reducer: {
        'counter': counterReducer,
        'themeToggle': themeToggleReducer,
        'user': userReducer,
    }
})

export default store