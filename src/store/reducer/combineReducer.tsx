import { combineReducers } from "redux";
import noteReducer from "./noteReducer";
import { alertReducer } from "./alertReducer";
import userReducer from "./userReducer";

export const reducers = combineReducers({
    notes:noteReducer,
    alert:alertReducer,
    user:userReducer
})