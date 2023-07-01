import { combineReducers } from 'redux';
import { messageReducer } from './messages-reducer.js/messageReducer';

// const initialState = {};

// const reducer = (state = initialState, action) => state ;

export const rootReducer = combineReducers({
    messages: messageReducer,
});