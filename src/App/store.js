import {configureStore} from "@reduxjs/toolkit";
import { Users } from "../features/UserSlice";
import logger from "redux-logger"



export const store = configureStore({
    reducer: {
        Users

    },
middleware:(buildGetDefaultMiddleware)=> buildGetDefaultMiddleware().
concat(logger)
})
