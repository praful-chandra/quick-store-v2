import React from "react";

import Button from "../../button/button.component";

export default function CategoryPopularDetails(props) {


  return (
    <div className="categorypopulardetail-wrapper">
      <div className="categorypopulardetail-title">T-shirts</div>
      <div className="categorypopulardetail-productsgrid">
        <img
          src={require("../../../assets/elijah-m-henderson-jRA-yoDL68M-unsplash.jpg")}
          alt="prod1"
        />
        <img
          src={require("../../../assets/creaslim-BK4DswauUmo-unsplash.jpg")}
          alt="prod2"
        />
        <img
          src={require("../../../assets/ian-dooley-TT-ROxWj9nA-unsplash.jpg")}
          alt="prod3"
        />
        <img
          src={require("../../../assets/mbalimbali-JgMlVsGTzO4-unsplash.jpg")}
          alt="prod4"
        />
      </div>
      <Button message="See More" />
    </div>
  );
}
