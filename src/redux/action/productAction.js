import {Actiontypes} from "../constants/actiontypes";


export const setProduct=(products)=>{
    return {
    type:Actiontypes.SET_PRODUCT,
    payload:products , };};
export const selectedProduct=(product)=>{
    return{
    type:Actiontypes.SELECTED_PRODUCT,
    payload:product ,
};};
export const removeselectedProduct=(product)=>{
    return{
    type:Actiontypes.  REMOVE_SELECTED_PRODUCT,
    payload:product ,
};};
