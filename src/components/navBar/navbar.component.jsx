import React,{useState} from 'react'
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faShoppingCart,faSearch} from "@fortawesome/free-solid-svg-icons";

export default function NavBar() {

    const [scroll,scrollHandler] = useState(window.scrollY);

    window.onscroll = (e) => {
        scrollHandler(window.scrollY);
      };

    return (
        <div className="navbar-wrapper" style={{
            boxShadow: scroll > 50 ? "0px 10px 30px #aaa" : "",
          }}>
            <img src={require("../../assets/Logo.png")} alt="quick store" className="navbar-logo"/>
            <form>
                <input type="search" name="search" id="search" className="navbar-searchbar" placeholder="Search for : items, categories, brands, etc"/>
                <button className="navbar-searchbar-btn pointer" type="submit">
                    <FontAwesomeIcon icon={faSearch} /> 
                 </button>
            </form>
            <div className="navbar-user">
                    <div className="navbar-user-cart">
                        <FontAwesomeIcon icon={faShoppingCart} />
                        <span>Cart</span>
                        <span className="navbar-user-cart-count">
                            9
                        </span>

                    </div>

                    <div className="navbar-user-name">
                        <span className="navbar-user-name-bold"> HELLO </span>
                        user name
                    </div>
            </div>
        </div>
    )
}
