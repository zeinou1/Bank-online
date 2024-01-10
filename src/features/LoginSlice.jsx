import { createSlice } from '@reduxjs/toolkit';

const UserLoginSlice = createSlice({
    name: 'userLogin',
    initialState: {
        userLogin: null,
        loading: null,
        error : null,
    },
    reducers: {
        login: (state, action) => {
            state.userLogin = action.payload;
        },
        logout: (state) => {
            state.userLogin = null;
        },
    },
});

export default UserLoginSlice.reducer
