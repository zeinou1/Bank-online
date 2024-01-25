import { createSlice, createAsyncThunk} from "@reduxjs/toolkit";

import axios from "axios";
//Post profile
export const UserData = createAsyncThunk(
    'profile/DataUser',
    async (token) => {
        const response = await fetch('http://localhost:3001/api/v1/user/profile', {
            method: 'POST',
            headers: { 
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${token}`
            }
        });
        const data = await response.json();
        return data.body;
    }
);


// UpdateProfile
export const updateProfile = createAsyncThunk(
    'Username/updateUsername', 
    async ({ UserName, token }) => {
    const response = await fetch('http://localhost:3001/api/v1/user/profile', {
      method: 'PUT', 
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${token}`, 
      },
      body: JSON.stringify({ userName: UserName }),
    });
  
    if (!response.ok) {
      throw new Error('Something went wrong!');
    }
    return response.json();
  });
  


const profileSlice = createSlice({
    name: "profile",
    initialState: {
        email: "",
        firstName: "",
        lastName: "",
        id: "",
        userName : "",
      
    },
    reducers: {
            initialProfile: (state) => {
            state.email = "";
            state.firstName = "";
            state.lastName = "";
            state.id = "";
            state.userName = "";
        },
    },
    extraReducers: (builder) => {
        builder
        builder
        .addCase(UserData.fulfilled, (state, { payload }) => {
            if (payload) {
                state.email = payload.email;
                state.firstName = payload.firstName;
                state.lastName = payload.lastName;
                state.userName = payload.userName;
                state.id = payload.id;
            }
        })
        builder
        .addCase(updateProfile.fulfilled, (state, { payload }) => {
            if(payload){
                state.userName = payload.userName;
            }
        })
    },
});


export const { LogoutProfile } = profileSlice.actions;
export default profileSlice.reducer;
