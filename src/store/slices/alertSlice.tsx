import { createSlice } from "@reduxjs/toolkit";

const initialState: { type: string, message: string } = { type: '', message: '' }

const alertSlice = createSlice({
    name: 'note',
    initialState,
    reducers: {
        setAlert: (_state, action) => {
            return { type: action.payload.type, message: action.payload.message }
        },
        removeAlert: () => {
            return { type: '', message: '' }
        }
    },
})


// const debounce = (mainFunction: Function, delay: number) => {
//     // Declare a variable called 'timer' to store the timer ID
//     let timer: ReturnType<typeof setTimeout>;
//     // Return an anonymous function that takes in any number of arguments
//     return function (...args: any[]) {
//         // Clear the previous timer to prevent the execution of 'mainFunction'
//         clearTimeout(timer);
//         // Set a new timer that will execute 'mainFunction' after the specified delay
//         timer = setTimeout(() => { mainFunction(...args); }, delay);
//     };
// };


export const { setAlert, removeAlert } = alertSlice.actions;

export default alertSlice.reducer;

