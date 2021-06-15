
import { Actiontypes } from "../constants/actiontypes";
const initialstate={product:[],};
export const ProductReducer=(state=initialstate,{type,payload})=>{
    switch (type) {
        case Actiontypes.SET_PRODUCT:
            return {...state,product:payload};
            
       
    
        default:
            return state;
          
    }
};

export const Productselected=(state={},{type,payload})=>{
    switch (type) {
        case Actiontypes.SELECTED_PRODUCT:
            return {...state,...payload};
            
            case Actiontypes.REMOVE_SELECTED_PRODUCT:
                return {};
    
        default:
            return state;
          
    }
};

