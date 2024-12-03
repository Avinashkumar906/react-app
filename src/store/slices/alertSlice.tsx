import { createSlice } from "@reduxjs/toolkit";

const initialState:{type:string,message:string} = {type:'',message:''}
const alertSlice = createSlice({
    name:'note',
    initialState,
    reducers:{
        setAlert:(state,action) => {
            state = { type:action.payload.type,message:action.payload.message}
        },
        removeAlert:(state) => {
            state = { type:'',message:''}
        }
    },
})

// export const {logout} = userSlice.actions;

export default alertSlice.reducer;

