import React from "react";

export default function Button(props) {
  return (
    <div
      className="button-wrapper"
      style={{
        width: props.size || "20rem",
        color: props.color || "",
        backgroundColor: props.backgroundColor || "",
      }}
    >
      {props.message}
    </div>
  );
}
