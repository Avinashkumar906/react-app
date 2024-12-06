import { createSlice,createAsyncThunk, GetThunkAPI } from "@reduxjs/toolkit";
import { USER, USER_DETAIL } from "../../types/types";
import fetchApi from "../../http/fetch";
import { setAlert } from "./alertSlice";

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

export const login = createAsyncThunk('user/login', async(credentials:USER_DETAIL,thunkApi:GetThunkAPI<any>) => {
    try {
        let response = (await fetchApi('user/signin','POST',credentials));
        if(response.status === 200){
            thunkApi.dispatch(setAlert({'type':'success','message':'User loggedin successfully!'}))
            return response.data;
        }
    } catch (error) {
        thunkApi.dispatch(setAlert({'type':'danger','message':'Please use correct credentials!'}))
        return {token:''}
    }
})

export const signup = createAsyncThunk('user/signup', async(credentials:USER_DETAIL,thunkApi:GetThunkAPI<any>) => {
    try {
        let response =  (await fetchApi('user/signup','POST',credentials));
        if(response.status === 200){
            thunkApi.dispatch(setAlert({'type':'success','message':'User registered successfully!'}))
            return response.data;
        }
    } catch (error) {
        thunkApi.dispatch(setAlert({'type':'danger','message':'Please try again!'}))
        return {token:''}
    }
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

