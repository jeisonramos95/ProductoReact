import { createStore, applyMiddleware, compose } from 'redux';
import thunk from "redux-thunk";
import rootReducer from './reducers';

const defaultState = {};
const middleware = [thunk];

const store = createStore(
    rootReducer,
    defaultState,
    applyMiddleware(...middleware))

export default store;