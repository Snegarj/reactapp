import {useSelector} from "react-redux";
import   React,{useEffect} from "react";
import {useDispatch} from "react-redux";
import {setProduct} from "../redux/action/productAction"
import axios from "axios";
import {ProductComponent} from "./ProductComponent";

export const ProductList=()=>{
    const products =useSelector( (state) => state);
const dispatch=useDispatch();
const fetchproducts=async ()=>{
  const response= await axios.get("https://fakestoreapi.com/products").catch((err)=>{
        console.log("ERR",err);
    });
  
    dispatch(setProduct(response.data));
    };
        useEffect(()=>{fetchproducts();},[]);
        
       
        console.log("PRODUCTS",products); 
       return(
           <div className="ui grid container">
               <ProductComponent/>
          
           </div>
       )}