import React from "react";
import {withRouter} from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlusCircle } from "@fortawesome/free-solid-svg-icons";

 function ProductItem(props) {
  const product = props.product;

  

  return (
    <div className="productitem-wrapper">
      <div className="productitem-add">
        <FontAwesomeIcon icon={faPlusCircle} onClick={() => alert("add")} />
      </div>
      <span onClick={() => props.history.push(`/product/${[product._id]}`)}>
        <img
          src={product.image}
          alt="product"
          className="productitem-image"
        />
        <div className="productitem-details">
          <div className="productitem-details-title">{product.name}</div>

         {
           product.discount > 0 ?  <div>
          <span className="productitem-details-discount">{"Rs."+product.price}</span>
          <span className="productitem-details-price">{"Rs."+(product.price - (product.discount / 100) * product.price)}</span>
          </div> : <div className="productitem-details-price">{"Rs."+product.price}</div>
         }

        </div>
      </span>
    </div>
  );
}

export default withRouter(ProductItem);