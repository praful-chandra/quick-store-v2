import React from "react";

export function ProductLoading(props) {
  const data = [];

  for (let i = 1; i <= props.length; i++) {
    data.push(
      <div className="loading-product-wrapper" key={"loading"+i}>
        <div className="loading-product-image"></div>
        <div className="loading-product-textbox"></div>
        <div className="loading-product-textbox"></div>
      </div>
    );
  }

  return data;
}
