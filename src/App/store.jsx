import { configureStore } from "@reduxjs/toolkit";
import UserLogin from "../features/LoginSlice.jsx"


const store = configureStore({
    reducer: { 
        user : UserLogin
    }
})

export default store;