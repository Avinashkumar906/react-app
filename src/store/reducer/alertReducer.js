export const alertReducer = (state = {type:'',message:''}, action) => {
    if(action.type === 'ADD_ALERT'){
        return {type:action.payload.type,message:action.payload.message}
    }else if(action.type === 'REMOVE_ALERT'){
        return {type:'',message:''}
    }
    return state
}