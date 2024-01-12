import { configureStore,combineReducers } from "@reduxjs/toolkit";
import userReducer from './../features/LoginSlice';
import ProfileReducer from "../features/profileSlice";
//const state = {}

const store = configureStore({
    reducer: {
        user: userReducer,
        profile: ProfileReducer
    }
})


// const NosReducers = combineReducers({
//         user: userReducer,
//         profile: ProfileReducer
// });


// const store = configureStore({
//     preloadedState: state,
//     reducer: NosReducers,
// })
 export default store;