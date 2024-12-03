import { createSlice,createAsyncThunk } from "@reduxjs/toolkit";
import { USER, USER_DETAIL } from "../../types/types";
import fetchApi from "../../http/fetch";

const initialState:USER = {
    token:localStorage.getItem('token') || '',
    user:getUser()
}

function getUser(){
    try {
        return JSON.parse(localStorage.getItem('user') || '')
    } 
    catch (error) { return undefined }
}

export const login = createAsyncThunk('user/login', async(credentials:USER_DETAIL) => {
    return (await fetchApi('user/signin','POST',credentials)).data;
})

export const signup = createAsyncThunk('user/signup', async(credentials:USER_DETAIL) => {
    return (await fetchApi('user/signup','POST',credentials)).data;
})

const userSlice = createSlice({
    name:'user',
    initialState,
    reducers:{
        logout:()=>{
            localStorage.clear();
            return {token:'',user:''}
        }
    },
    extraReducers:(builder) => {
        builder.addCase(login.fulfilled,(state,action)=>{
            localStorage.setItem('token', action.payload.token);
            localStorage.setItem('user', JSON.stringify(action.payload.user));
            state.user = action.payload.user;
        }).addCase(signup.fulfilled,(state,action)=> {
            localStorage.setItem('token', action.payload.token);
            localStorage.setItem('user', JSON.stringify(action.payload.user));
            state.user = action.payload.user;
        })
    }
})

export const {logout} = userSlice.actions;

export default userSlice.reducer;

