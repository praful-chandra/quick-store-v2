import React from "react";

import NavBar from "./components/navBar/navbar.component";
import SubNavBar from "./components/subNavBar/subnavbar.component";

import HomepageScreen from "./screen/homepage/homepage.screen";

export default function App() {
  return (
    <div className="App">
      <NavBar />
      <div className="App-body">
        <SubNavBar />
        <HomepageScreen />
      </div>
    </div>
  );
}
