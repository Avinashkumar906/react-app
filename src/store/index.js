import {legacy_createStore, applyMiddleware} from 'redux'
import {thunk} from 'redux-thunk';
import { reducers } from './reducer/combineReducer';

const initialState = { notes:[] }

const store  = legacy_createStore(reducers,initialState,applyMiddleware(thunk));

export default store;