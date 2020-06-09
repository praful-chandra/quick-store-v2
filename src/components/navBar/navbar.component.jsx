import React, { useState } from "react";
import { withRouter } from "react-router-dom";
import { connect } from "react-redux";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faShoppingCart,
  faSearch,
  faArrowLeft,
} from "@fortawesome/free-solid-svg-icons";

import { changeTab } from "../../redux/action/subNav.action";

function NavBar(props) {
  const [scroll, scrollHandler] = useState(window.scrollY);
  const [displaySearchBar, displaySearchBarHandler] = useState(false);

  //   useEffect(() => {
  //     if (window.innerWidth < 610) displaySearchBarHandler(false);
  //   }, []);

  window.onscroll = (e) => {
    scrollHandler(window.scrollY);
    
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (window.innerWidth < 610 && !displaySearchBar)
    displaySearchBarHandler(true);
    else
      alert("search")
  };

  const handlesearchBack = ()=>{
    displaySearchBarHandler(false);

  }
  return (
    <div
      className="navbar-wrapper"
      style={{
        boxShadow: scroll > 50 ? "0px 10px 30px #aaa" : "",
      }}
    >
      <img
        src={require("../../assets/Logo.png")}
        alt="quick store"
        className="navbar-logo pointer"
        onClick={() => {
          props.changeTab(1);
          props.history.push("/");
        }}
      />

      <form onSubmit={handleSubmit}>
        <input
          type="search"
          name="search"
          id="search"
          className="navbar-searchbar"
          placeholder="Search for : items, categories, brands, etc"
        />
        {displaySearchBar ? (
         <> 
         <input
            type="search"
            name="search"
            id="search"
            className="navbar-searchbar-mobile"
            placeholder="Search for : items, categories, brands, etc"
          />
            <button className="navbar-searchbar-back pointer" onClick={handlesearchBack}>
          <FontAwesomeIcon icon={faArrowLeft} />
        </button>
         </>
        ) : null}

      

        <button className={`navbar-searchbar-btn ${displaySearchBar ? "navbar-searchbar-btn-mobile" : ""}  pointer`} type="submit">
          <FontAwesomeIcon icon={faSearch} />
        </button>
      </form>
      <div className="navbar-user">
        <div className="navbar-user-cart">
          <FontAwesomeIcon icon={faShoppingCart} />
          <span>Cart</span>
          <span className="navbar-user-cart-count">9</span>
        </div>

        <div className="navbar-user-name">
          <span className="navbar-user-name-bold"> HELLO </span>
          user name
        </div>
      </div>
    </div>
  );
}

export default connect(null, { changeTab })(withRouter(NavBar));
