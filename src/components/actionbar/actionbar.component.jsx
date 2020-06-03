import React, { useState } from "react";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faSortAmountUpAlt} from "@fortawesome/free-solid-svg-icons";

export default function ActionBar() {
  const [selectedItem, selectedItemHandler] = useState(0);

  const items = ["Date","price range", "size", "style", "type"];

  return (
    <div className="actionbar-wrapper">
      <div className="actionbar-head"> <FontAwesomeIcon icon={faSortAmountUpAlt} /> sort By</div>

      {items.map((itm, index) => (
        <div
          className={`actionbar-sub ${
            selectedItem === index ? "actionbar-sub-selected" : ""
          }`}
          onClick={()=>selectedItemHandler(index)}
        >
          {itm}
        </div>
      ))}
    </div>
  );
}
