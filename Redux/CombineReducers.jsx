import { combineReducers } from 'redux';
import { PriceReducer } from './PriceReducer';
import { Cart } from './CARTT';

export default combineReducers({
    Cart,
    PriceReducer,
});