export const setAlert = (alert,timer) => {
    return (dispatch) => {
        dispatch({type:'ADD_ALERT',payload:alert});
        if(timer){
            clearTimeout(window.timer)
            window.timer = setTimeout(()=>dispatch({type:'REMOVE_ALERT'}),timer);
        }
    }
} 

export const removeAlert = () => {
    return (dispatch) => {
        dispatch({type:'REMOVE_ALERT'})
    }
} 