import { configureStore } from "@reduxjs/toolkit";
import userReducer from './slices/userSlice';
import noteReducer from './slices/noteSlice';
import alertReducer from './slices/alertSlice';

const store = configureStore({
    reducer:{
        user:userReducer,
        note:noteReducer,
        alert:alertReducer
    }
})

// type export for rootstate
export type RootState = ReturnType<typeof store.getState>
// type export for rootDispatch
export type AppDispatch = typeof store.dispatch;

export default store;