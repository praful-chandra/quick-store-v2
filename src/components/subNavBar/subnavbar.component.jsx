import React, { useState } from "react";
import {withRouter} from "react-router-dom";

 function SubNavbar(props) {
  const [selected, selectedHandler] = useState(-1);

  return (
    <div className="subnavbar-wrapper">
      <ul>
        <li
          className={`${selected === 0 ? "subnavbar-selected" : ""} pointer`}
          onClick={() => {
            selectedHandler(0);
            props.history.push("/new")
          }}
        >
          What's New
        </li>
        <li
          className={`${selected === 1 ? "subnavbar-selected" : ""} pointer`}
          onClick={() => {
            selectedHandler(1);
          }}
        >
          Category
        </li>
        <li
          className={`${selected === 2 ? "subnavbar-selected" : ""} pointer`}
          onClick={() => {
            selectedHandler(2);
          }}
        >
          Campaign
        </li>
        <li
          className={`${selected === 3 ? "subnavbar-selected" : ""} pointer`}
          onClick={() => {
            selectedHandler(3);
          }}
        >
          Sales
        </li>
      </ul>
    </div>
  );
}


export default withRouter(SubNavbar);