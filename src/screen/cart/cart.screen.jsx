import React from "react";
import { connect } from "react-redux";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrashAlt } from "@fortawesome/free-solid-svg-icons";

import HeadingText from "../../components/headingText/headingtext.component";
import Button from "../../components/button/button.component";

function CartScreen(props) {
  return (
    <div className="cart-wrapper">
     {/* <div className="checkout-wrapper">
                <div className="checkout-header">
                    <div className="checkout-header-img">Product</div>
                    <div className="checkout-header-name">Title</div>
                    <div className="checkout-header-price">Price X Qty</div>
                    <div className="checkout-header-totalPrice">Total Price</div>
                    <div className="checkout-header-remove">Remove</div>
                </div>
               {
                   this.props.cartItems.map(item=> <CheckoutItem key={item._id} item={item}/>)
               }

               <div className="checkout-total">
                Total :  Rs. {this.props.totalAMount}
               </div>
            </div> */}
        <HeadingText text="Cart" size="3rem" color="#FF0053" />
        <div className="cart-details-itemwrapper">
          {props.cart.items.map((itm) => (
            <div
              key={"cartItm" + itm._id}
              className="cart-details-item"
            >
              <img
                className="cart-details-item-image"
                src={itm.image}
                alt="product"
              />

              <div className="cart-details-item-title">
                {itm.name}
              </div>
              <div className="cart-details-item-qty">
                {itm.quantity}
              </div>
              <div className="cart-details-item-price">
                Rs.{itm.price}
              </div>
              <div
                className="cart-details-item-delete"
                onClick={() => props.removeFromCart(itm._id)}
              >
                <FontAwesomeIcon icon={faTrashAlt} />
              </div>
            </div>
          ))}
        </div>
        <Button message="Checkout" cb={() => {}} />
    </div>
  );
}

const mapStateToProps = (state) => ({
  cart: state.cart,
});

export default connect(mapStateToProps)(CartScreen);
