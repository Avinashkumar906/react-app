const noteReducer = (state = [],action:any) => {
    switch (action.type) {
        case 'GET_ALL':{
            return  action.payload;
        }
        case 'ADD_NOTE':{
            return state.concat(action.payload)
        }
        case 'DELETE_ONE':{
            return  state.filter((f:any) => f._id !== action.payload.id);
        }
        case 'UPDATE_ONE':{
            let filteredState = state.filter((f :any)=> f._id !== action.payload.id);
            return filteredState.concat(action.payload.note);
        }
        default:
            break;
    }
    return state
}

export default noteReducer