// cSpell:words reduxjs
import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from 'axios';

//api
export const loginUser = createAsyncThunk(
 'user/loginUser',
        async (userCredentials) => {
            try {
                const response = await axios.post("http://localhost:3001/api/v1/user/login", userCredentials);
                const data = response.data;
                const token = data.body.token;
                localStorage.setItem('user', JSON.stringify(token));
                return data;
            } catch (error) {
                throw new Error(error.message);
            }
        }
);

const userSlice = createSlice({
    name: 'user',
    initialState: {
        loading: false,
        user: null,
        error:null,
        token: "",
        connected: false,
    },
    reducers: {
        logout: (state) => {
            state.connected = false;
            state.user = null;
            state.token = "";
        },

    },
    extraReducers:(builder)=> {
        builder
        builder.addCase(loginUser.pending, (state) => {
            state.loading = true;
            state.user = null;
            state.error = null;
        })
        builder.addCase(loginUser.fulfilled, (state, {payload}) => {
            state.loading = false;
            state.user = payload;
            state.token = payload.body.token;
            state.error = null;
            state.connected = true;
        })
        builder.addCase(loginUser.rejected, (state, action) => {
            state.loading = false;
            state.user = null;
            if(action.error.message === 'Request failed with status code 400'){
                state.error = 'Email ou password invalid';
            }else {
               state.error = action.error.message;
            }
        })
    }
})

export const { logout } = userSlice.actions;
export default userSlice.reducer;
