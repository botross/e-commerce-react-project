import CombineReducers from "./CombineReducers"
import {createStore} from "redux";


export const store = createStore(CombineReducers , window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__())
