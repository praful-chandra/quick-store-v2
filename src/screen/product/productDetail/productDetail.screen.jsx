import React, { useState } from "react";

import Button from "../../../components/button/button.component";

import allProducts from "../../../DATA/products";

export default function ProductDetail(props) {
  const [size, sizeHandler] = useState(0);


 const prod = allProducts.filter(p => p._id === props.match.params.id)[0];

  return (
    <div className="productdetail-wrapper">
      <div className="productdetail-image">
        <img
          src={prod.image}
          alt="product"
        />
      </div>
      <div className="productdetail-info">
        <div className="productdetail-info-title">{prod.name}</div>
        <div className="productdetail-info-description">
         {prod.description}
        </div>
        <div className="productdetail-info-size">
          {prod.avaliableSizes.map((s, i) => (
            <div
              className={`productdetail-info-size-item ${
                size === i ? "productdetail-info-size-item-selected" : ""
              }`}
              onClick={() => sizeHandler(i)}
            >
              {s}
            </div>
          ))}
        </div>
        <div className="productdetail-info-btn">
          <Button message="Add to cart" />
        </div>
      </div>
    </div>
  );
}
