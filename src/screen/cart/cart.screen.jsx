import React from "react";
import { connect } from "react-redux";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrashAlt } from "@fortawesome/free-solid-svg-icons";

import HeadingText from "../../components/headingText/headingtext.component";
import Button from "../../components/button/button.component";

import CartItem from "./cartItem";

import { getTotalPrice } from "../../redux/utils/cart.utl";

function CartScreen(props) {
  return (
    <div className="cart-wrapper">
      <HeadingText text="Cart" size="3rem" color="#FF0053" />
      <div className="checkout-wrapper">
        <div className="checkout-header">
          <div className="checkout-header-img">Product</div>
          <div className="checkout-header-name">Title</div>
          <div className="checkout-header-price">Price X Qty</div>
          <div className="checkout-header-totalPrice">Total Price</div>
          <div className="checkout-header-remove">Remove</div>
        </div>
        {props.cart.items.map((item) => (
          <CartItem key={item._id} item={item} />
        ))}

        <div className="checkout-total">
          Total : Rs. {getTotalPrice(props.cart.items)}
        </div>
      <span className="checkout-btn">
        <Button message="Checkout" cb={() => {}} />
      </span>
      </div>
    </div>
  );
}

const mapStateToProps = (state) => ({
  cart: state.cart,
});

export default connect(mapStateToProps)(CartScreen);
