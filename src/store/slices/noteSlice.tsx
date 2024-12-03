import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { NOTE } from "../../types/types";
import fetchApi from "../../http/fetch";

const initialState: Array<NOTE> = []

export const fetchAll = createAsyncThunk('note/fetchAll', async () => {
    try {
        return (await fetchApi('note/getAll')).data;
    } catch (error) {
        console.log(error)
    }
})

export const addNote = createAsyncThunk('note/addNote', async (note: NOTE) => {
    try {
        return (await fetchApi('note/addNote', 'POST', note)).data;
    } catch (error) {
        console.log(error)
    }
})

export const delNote = createAsyncThunk('note/delNote', async (id: string) => {
    try {
        let response = (await fetchApi(`note/deleteNote/${id}`, 'DELETE')).data;
        if (response.result.deletedCount) return { id };
    } catch (error) {
        console.log(error)
    }
})

export const editNote = createAsyncThunk('note/editNote', async ({ id, note }: { id: string, note: any }) => {
    try {
        let response = (await fetchApi(`note/updateNote/${id}`, 'PUT', note)).data;
        if (response.result.modifiedCount) return { id, note }
    } catch (error) {
        console.log(error)
    }
})

const noteSlice = createSlice({
    name: 'note',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(fetchAll.fulfilled, ({ }, action) => {
                return action.payload;
            }).addCase(addNote.fulfilled, (state, action) => {
                return state.concat(action.payload.result)
            }).addCase(delNote.fulfilled, (state, action) => {
                return state.filter((f: NOTE) => f._id !== action.payload?.id)
            }).addCase(editNote.fulfilled, (state, { payload }) => {
                let res = state.filter((f: NOTE) => f._id !== payload?.id);
                return res.concat(payload?.note)
            })
    }
})

export default noteSlice.reducer;

