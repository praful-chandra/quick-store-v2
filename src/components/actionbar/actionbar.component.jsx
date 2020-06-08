import React, { useState, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faSortAmountUpAlt,
  faSortAmountDownAlt,
} from "@fortawesome/free-solid-svg-icons";

export default function ActionBar(props) {
  const [selectedItem, selectedItemHandler] = useState(0);
  const items = ["latest", "price", "discount"];
  const [direction, directionHandler] = useState(true);

  useEffect(() => {
    handleSort(selectedItem);
  }, [direction]);


  const handleSort = (index) => {
    switch (index) {
      case 0: {
        selectedItemHandler(index);
        props.sort({ createdAt: direction ? 1 : -1 });
        break;
      }

      case 1: {
        selectedItemHandler(index);
        props.sort({ price: direction ? 1 : -1 });
        break;
      }
      case 2: {
        selectedItemHandler(index);
        props.sort({ discount: direction ? 1 : -1 });
        break;
      }

      default: {
        selectedItemHandler(0);
        props.sort({ createdAt: direction ? 1 : -1 });
        break;
      }
    }
  };

  return (
    <div className="actionbar-wrapper">
      <button
        className="actionbar-head pointer"
        onClick={() => {
          directionHandler(!direction);
        }}
      >
        {" "}
        <FontAwesomeIcon
          icon={direction ? faSortAmountUpAlt : faSortAmountDownAlt}
        />{" "}
        sort By
      </button>

      {items.map((itm, index) => (
        <button
          className={`actionbar-sub ${
            selectedItem === index ? "actionbar-sub-selected" : ""
          }`}
          onClick={() => handleSort(index)}
        >
          {itm}
        </button>
      ))}
    </div>
  );
}
