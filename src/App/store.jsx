import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./../features/LoginSlice";
import ProfileReducer from "../features/profileSlice";
const store = configureStore({
  reducer: {
    user: userReducer,
    profile: ProfileReducer,
  },
});
export default store;
