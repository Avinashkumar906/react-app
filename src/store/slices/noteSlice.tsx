import { createSlice, createAsyncThunk, GetThunkAPI } from "@reduxjs/toolkit";
import { NOTE } from "../../types/types";
import fetchApi from "../../http/fetch";
import { setAlert } from "./alertSlice";

const initialState: Array<NOTE> = []

export const fetchAll = createAsyncThunk('note/fetchAll', async (_args, thunkApi:GetThunkAPI<any>) => {
    try {
        let response = (await fetchApi('note/getAll'));
        if (response.status === 200){
            thunkApi.dispatch(setAlert({'type':'success','message':'Notes fetched successfully!'}))
            return response.data
        }
    } catch (error) {
        thunkApi.dispatch(setAlert({'type':'danger','message':'Unable to fetch notes, try after some time!'}))
    }
})

export const addNote = createAsyncThunk('note/addNote', async (note: NOTE,thunkApi:GetThunkAPI<any>) => {
    try {
        let response = (await fetchApi('note/addNote', 'POST', note));
        if (response.status === 200){
            thunkApi.dispatch(setAlert({'type':'success','message':'Notes added successfully!'}))
            return response.data
        }
    } catch (error) {
        thunkApi.dispatch(setAlert({'type':'danger','message':'Unable to add note, try after some time!'}))
    }
})

export const delNote = createAsyncThunk('note/delNote', async (id: string,thunkApi:GetThunkAPI<any>) => {
    try {
        let response = (await fetchApi(`note/deleteNote/${id}`, 'DELETE'));
        if (response.status === 200 && response.data.result.deletedCount){
            thunkApi.dispatch(setAlert({'type':'success','message':'Note deleted successfully!'}))
            return {id}
        }
    } catch (error) {
        thunkApi.dispatch(setAlert({'type':'danger','message':'Unable to delete note, try after some time!'}))
    }
})

export const editNote = createAsyncThunk('note/editNote', async ({ id, note }: { id: string, note: NOTE },thunkApi:GetThunkAPI<any>) => {
    try {
        let response = (await fetchApi(`note/updateNote/${id}`, 'PUT', note));
        if (response.status === 200 && response.data.result.modifiedCount) {
            thunkApi.dispatch(setAlert({'type':'success','message':'Note updated successfully!'}))
            return { id, note }
        }
    } catch (error) {
        thunkApi.dispatch(setAlert({'type':'danger','message':'Unable to update note, try after some time!'}))
    }
})

const noteSlice = createSlice({
    name: 'note',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(fetchAll.fulfilled, (_state, {payload}) => {
                return payload;
            }).addCase(addNote.fulfilled, (state, {payload}) => {
                return state.concat(payload.result)
            }).addCase(delNote.fulfilled, (state, {payload}) => {
                return state.filter((f: NOTE) => f._id !== payload?.id)
            }).addCase(editNote.fulfilled, (state, { payload }) => {
                let res = state.filter((f: NOTE) => f._id !== payload?.id);
                payload?.note && res.push(payload?.note);
                return res
            })
    }
})

export default noteSlice.reducer;

