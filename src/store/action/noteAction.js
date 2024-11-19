import fetchApi from "../../http/fetch";
import { setAlert } from "./alertAction";

export const fetchAll = () => {
    return async (dispatch) => {
        try {
            const response = await (await fetchApi('note/getAll')).json();
            if(response){
                dispatch(setAlert({type:'primary',message:'All notes Fetched successfully'},3000))
                dispatch({ type: 'GET_ALL', payload: response })
            }
        } catch (error) {
            dispatch(setAlert({type:'danger',message:'Something went wrong!'}))
        }
    }
}

// Add nNote
export const addNote = (note) => {
    return async (dispatch) => {
        try {
            const response = await (await fetchApi('note/addNote', 'POST', note)).json();
            if (response.status === 'success') {
                dispatch({ type: 'ADD_NOTE', payload: response.result });
                dispatch(setAlert({type:'primary',message:'Note added successfully!'},3000))
            } else {
                dispatch(setAlert({type:'warning',message:'Some error occured!'},3000))
            }

        } catch (error) {
            dispatch(setAlert({type:'danger',message:'Something went wrong!'}))
        }
    }
}

// delete note APIcall
export const delNote = (id) => {
    return async (dispatch) => {
        try {
            const response = await (await fetchApi(`note/deleteNote/${id}`, 'DELETE')).json();
            if (response.status === 'success') {
                dispatch({ type: 'DELETE_ONE', payload: {id} });
                dispatch(setAlert({type:'primary',message:'Note deleted successfully!'},3000))
            } else {
                dispatch(setAlert({type:'warning',message:'Some error occured!'},3000))
            }
        } catch (error) {
            dispatch(setAlert({type:'danger',message:'Something went wrong!'}))
        }
    }
}

export const editNote = (id, note) => {
    return async (dispatch) => {
        try {
            const response = await (await fetchApi(`note/updateNote/${id}`, 'PUT', note)).json();
            if (response.status === 'success') {
                dispatch({ type: 'UPDATE_ONE', payload: {id, note} });
                dispatch(setAlert({type:'primary',message:'Note updated successfully!'},3000))
            } else {
                dispatch(setAlert({type:'warning',message:'Some error occured!'},3000))
            }
        } catch (error) {
            dispatch(setAlert({type:'danger',message:'Something went wrong!'}))
        }
    }
}