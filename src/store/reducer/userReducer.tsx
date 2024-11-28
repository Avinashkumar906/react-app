const initialState = {
    token:localStorage.getItem('token'),
    user:getUser()
}

function getUser(){
    try {
        return JSON.parse(localStorage.getItem('user') || '')
    } catch (error) {
        return undefined
    }
}

const userReducer = (state = initialState, { type, payload } :any) => {
  switch (type) {
    case 'LOGIN': {
      localStorage.setItem('token', payload.token);
      localStorage.setItem('user', JSON.stringify(payload.user));
      return { user:payload.user }
    }
    case 'LOGOUT':{
        localStorage.clear();
        return {}
    }
    default:
      return state
  }
}

export default userReducer;
