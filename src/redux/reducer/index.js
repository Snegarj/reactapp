import {combineReducers} from 'redux';
import { ProductReducer, Productselected } from "./productReducer";
 export  const reducers =combineReducers({
allProduct:ProductReducer,
product:Productselected,
});
