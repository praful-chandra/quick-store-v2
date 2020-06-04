import React from "react";

export default function HollowButton(props) {
  return (
    <div
      className="hollowbutton-wrapper"
      style={{
        width: props.size || "29rem",
        fontSize: props.fontSize || "",
        color: props.color || "",
        padding : props.padding || "",
        margin : props.margin || ""
      }}
    >
      {props.message}
    </div>
  );
}
