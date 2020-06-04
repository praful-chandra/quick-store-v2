import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlusCircle } from "@fortawesome/free-solid-svg-icons";

export default function ProductItem(props) {
  return (
    <div className="productitem-wrapper">
      <div className="productitem-add">
        <FontAwesomeIcon icon={faPlusCircle} onClick={() => alert("add")} />
      </div>
      <span onClick={() => alert("view")}>
        <img
          src={require("../../assets/sherise-gsHnw5NMvtk-unsplash.jpg")}
          alt="product"
          className="productitem-image"
        />
        <div className="productitem-details">
          <div className="productitem-details-title">Brown Ban hat</div>
          <div className="productitem-details-price">Rs. 2520</div>
        </div>
      </span>
    </div>
  );
}
