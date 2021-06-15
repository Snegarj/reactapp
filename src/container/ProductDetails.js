
import   React,{useEffect} from "react";

import axios from "axios";
import { useParams } from "react-router-dom";
import { useSelector } from "react-redux";
import { selectedProduct,removeselectedProduct} from "../redux/action/productAction";

import { useDispatch } from "react-redux";
export const ProductDetail=()=>{

    let product = useSelector((state) => state.product);
    const { image, title, price, category, description } = product;
    const {productId} = useParams();
    const dispatch=useDispatch();
    console.log(productId);
    const fetchproducts = async (id) => {
        const response = await axios
          .get(`https://fakestoreapi.com/products/${id}`)
          .catch((err) => {
            console.log("Err: ", err);
          });
        console.log(response.data);
    
      dispatch(selectedProduct(response.data));
          };
          useEffect(()=>{ if (productId && productId !== "") fetchproducts(productId);
          return () => {
            dispatch(removeselectedProduct());
          };}, [productId]);

        return (
            <div className="ui grid container"  style={{top:"50px",    marginTop:"5rem"}}> 
              <div className="ui grid container">
      {Object.keys(product).length === 0 ? (
        <div>...Loading</div>
      ) : (
                <div className="ui placeholder segment">
                  <div className="ui two column stackable center aligned grid">
                    <div className="ui vertical divider"></div>
                    <div className="middle aligned row">
                      <div className="column lp">
                        <img className="ui fluid image" src={image}  style={{height:"400px"}} />
                      </div>
                      <div className="column rp">
                        <h1>{title}</h1>
                        <h2>
                          <a className="ui teal tag label">${price}</a>
                        </h2>
                        <h3 className="ui brown block header">{category}</h3>
                        <p>{description}</p>
                        <div className="ui vertical animated button" tabIndex="0">
                          <div className="hidden content">
                            <i className="shop icon"></i>
                          </div>
                          <div className="visible content">Add to Cart</div>
                        </div>
                      </div>
                    </div>
                  </div>
             
                </div>
             )}
            </div>    </div>
        )
}
