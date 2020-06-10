import React from "react";
import {Route} from "react-router-dom";
import NavBar from "./components/navBar/navbar.component";

import HomepageScreen from "./screen/homepage/homepage.screen";
import ProductsScreen from "./screen/product/products/products.screen";
import ProductDetailScreen from "./screen/product/productDetail/productDetail.screen";
import Footer from "./components/footer/footer.component";

import SearchScreen from "./screen/search/search.screen";

export default function App() {
  return (
      <div className="App">
      <NavBar />
      <div className="App-body">
        <Route  exact path="/search:search" component={SearchScreen} />
        <Route  exact path="/" component={HomepageScreen} />
        <Route  exact path="/category/:id" component={ProductsScreen} />
        <Route  exact path="/product/:id" component={ProductDetailScreen} />
      </div>
      <Footer />
    </div>

  );
}
