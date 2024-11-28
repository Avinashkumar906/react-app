import fetchApi from "../../http/fetch";
import { setAlert } from "./alertAction";

export const userLogin = (credentials:any) => {
    return async (dispatch:any) => {
        try {
            const response = (await fetchApi('user/signin','POST',credentials)).data;
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

export const userSignup = (credentials:any) => {
    return async (dispatch:any) => {
        try {
            const response = (await fetchApi('user/signup','POST',credentials)).data;
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
    return (dispatch:any) => {
        dispatch({type:'LOGOUT'})
    }
}
