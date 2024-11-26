import fetchApi from "../../http/fetch";
import { setAlert } from "./alertAction";

export const userLogin = (credentials) => {
    return async (dispatch) => {
        try {
            const response = await (await fetchApi('user/signin','POST',credentials)).json();
            if(response.status === 'success'){
                dispatch({ type: 'LOGIN', payload: response })
                dispatch(setAlert({type:'primary',message:'User Loggend in successfully.'},3000))
            } else {
                dispatch(setAlert({type:'danger',message:'Something went wrong!'}))
            }
        } catch (error) {
            console.log(error)
        }
    }
}

export const userSignup = (credentials) => {
    return async (dispatch) => {
        try {
            const response = await (await fetchApi('user/signup','POST',credentials)).json();
            if(response.status === 'success'){
                dispatch({ type: 'LOGIN', payload: response })
                dispatch(setAlert({type:'primary',message:'User Loggend in successfully.'},3000))
            } else{
                dispatch(setAlert({type:'danger',message:'Something went wrong!'}))
            }
        } catch (error) {
            console.log(error)
        }
    }
}

export const userLogout  = () => {
    return (dispatch) => {
        dispatch({type:'LOGOUT'})
    }
}
