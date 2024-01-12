// cSpell:words reduxjs
import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from 'axios';
import { services } from '../App/services';

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
                //services.GetToken(data.body.token)
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
        token: ""
    },
    // reducers: {
    //     logout: (state) => {
    //         localStorage.removeItem('user');
    //         state.user = null;
    //     },
    //     userAuth : {
    //         reducer(state, action) {
    //             state.user = action.payload;
    //         },
    //     }

    // },
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
        })
        builder.addCase(loginUser.rejected, (state, action) => {
            state.loading = false;
            state.user = null;
            console.log(action.error.message)
            if(action.error.message === 'Request failed with status code 400'){
                state.error = 'email ou password invalid'
            }else {
                state.error = action.error.message;
            }
        })
    }
})


export default userSlice.reducer;
