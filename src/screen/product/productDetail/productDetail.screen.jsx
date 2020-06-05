import React from "react";

import Button from "../../../components/button/button.component";

export default function ProductDetail() {
  return (
    <div className="productdetail-wrapper">
      <div className="productdetail-image">
        <img
          src={require("../../../assets/dom-hill-nimElTcTNyY-unsplash.jpg")}
          alt="product"
        />
      </div>
      <div className="productdetail-info">
        <div className="productdetail-info-title">Yellow Suit</div>
        <div className="productdetail-info-description">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque eu
          egestas metus, vel volutpat tellus. Nunc a auctor nunc, ac ultrices
          mauris. Curabitur diam sem, ullamcorper ac eros sed, eleifend
          fringilla lorem. Vestibulum convallis massa nec felis efficitur
          ultricies. Mauris pretium neque et suscipit hendrerit. Suspendisse
          potenti. Vivamus blandit imperdiet elit in suscipit. Cras nec erat a
          lorem viverra iaculis. In in auctor ipsum.
        </div>
        <div className="productdetail-info-btn" >
        <Button  message="Add to cart" />
        </div>
        
      </div>
    </div>
  );
}
