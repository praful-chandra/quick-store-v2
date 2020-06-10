import React from "react";
import {Route} from "react-router-dom";
import NavBar from "./components/navBar/navbar.component";

import HomepageScreen from "./screen/homepage/homepage.screen";
import ProductsScreen from "./screen/product/products/products.screen";
import ProductDetailScreen from "./screen/product/productDetail/productDetail.screen";
import SearchScreen from "./screen/search/search.screen";
import CartScreen from "./screen/cart/cart.screen";
import Footer from "./components/footer/footer.component";

export default function App() {
  return (
      <div className="App">
      <NavBar />
      <div className="App-body">
        <Route  exact path="/" component={HomepageScreen} />
        <Route  exact path="/search:search" component={SearchScreen} />
        <Route  exact path="/category/:id" component={ProductsScreen} />
        <Route  exact path="/product/:id" component={ProductDetailScreen} />
        <Route  exact path="/cart" component={CartScreen} />
      </div>
      <Footer />
    </div>

  );
}
