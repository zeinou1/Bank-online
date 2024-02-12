import { configureStore } from "@reduxjs/toolkit";
import userReducer from "../Components/features/LoginSlice";
import ProfileReducer from "../Components/features/profileSlice";
const store = configureStore({
  reducer: {
    user: userReducer,
    profile: ProfileReducer,
  },
});
export default store;
