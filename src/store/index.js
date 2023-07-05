import { applyMiddleware, compose, createStore } from 'redux';
import { rootReducer } from './rootReducer';

const middlewares = [
    // massagesMiddleware;
];

export const store = createStore(rootReducer, compose(applyMiddleware(...middlewares)));