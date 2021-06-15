import { useSelector } from "react-redux";
import React from "react";
import { Link } from "react-router-dom";
export const ProductComponent = () => {

    let products = useSelector((state) => state.allProduct.product);
    
    const renderList = products.map((product) => {
      const {  title, image, price, category,id } = product;
    
           
            
      return (
  
        <div className="five wide column" key={id} style={{top:"50px"}} >
      <Link to={`/product/${id}`}>
            <div className="ui link cards">
          
              <div className="card" >
          
                <div className=" image"  >
                  <img src={image} alt={title} style={{height:"250px"}}   />
                </div>
                <div className="content"  >
                  <div className="header" style={{fontSize:"12px"}}>{title}</div>
                  <div className="meta price">$ {price}</div>
                  <div className="meta">{category}</div>
                </div>
              </div>
            </div>
            </Link>
            </div>
      );
    });
    return <>{renderList}</>;
  };
 
 