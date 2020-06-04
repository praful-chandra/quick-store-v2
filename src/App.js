import React from "react";
import {Route} from "react-router-dom";
import NavBar from "./components/navBar/navbar.component";
import SubNavBar from "./components/subNavBar/subnavbar.component";

import HomepageScreen from "./screen/homepage/homepage.screen";
import WhatsNewScreen from "./screen/whatsnew/whatsnew.screen";

export default function App() {
  return (
      <div className="App">
      <NavBar />
      <div className="App-body">
        <SubNavBar />
        <Route  exact path="/" component={HomepageScreen} />
        <Route  exact path="/new" component={WhatsNewScreen} />
      </div>
    </div>

  );
}
