export const setAlert = (alert:any,timer?:number) => {
    return (dispatch:any) => {
        dispatch({type:'ADD_ALERT',payload:alert});
        if(timer){
            // clearTimeout(window.timer)
            // window.timer = setTimeout(()=>dispatch({type:'REMOVE_ALERT'}),timer);
        }
    }
} 

export const removeAlert = () => {
    return (dispatch:any) => {
        dispatch({type:'REMOVE_ALERT'})
    }
} 