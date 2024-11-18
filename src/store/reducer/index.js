import { combineReducers } from "redux";
import noteReducer from "./noteReducer";
import { alertReducer } from "./alertReducer";

export const reducers = combineReducers({
    notes:noteReducer,
    alert:alertReducer
})