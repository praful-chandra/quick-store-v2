import React from "react";
import {Route} from "react-router-dom";
import NavBar from "./components/navBar/navbar.component";

import HomepageScreen from "./screen/homepage/homepage.screen";
import ProductDetailScreen from "./screen/product/productDetail/productDetail.screen";
import Footer from "./components/footer/footer.component";

export default function App() {
  return (
      <div className="App">
      <NavBar />
      <div className="App-body">
        <Route  exact path="/" component={HomepageScreen} />
        <Route  exact path="/product" component={ProductDetailScreen} />
      </div>
      <Footer />
    </div>

  );
}
