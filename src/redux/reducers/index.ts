import { combineReducers } from "redux";
import productsReducer from './products.reducer';

export default combineReducers({
    categories: productsReducer,
});