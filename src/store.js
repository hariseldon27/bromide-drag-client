import { configureStore } from "@reduxjs/toolkit"
import counterReducer from "./reducers/counterSlice";
import themeToggleReducer from "./reducers/themeToggleSlice"
import userReducer from "./reducers/userSlice"
import spinnerReducer from "./reducers/spinnerSlice";
import galleryReducer from "./reducers/gallerySlice";

const store = configureStore({
    reducer: {
        'counter': counterReducer,
        'themeToggle': themeToggleReducer,
        'user': userReducer,
        'spinner': spinnerReducer,
        'gallery': galleryReducer
    }
})

export default store