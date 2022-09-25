import React from "react";

function ViewIndicator(props) {
  return (
    <h3
      style={{
        position: "absolute",
        zIndex: 500,
        background: "transparent",
        bottom: 5,
        left: 5,
        color: "white",
        textAlign: "center",
        fontWeight: 100,
        userSelect: "none",
      }}
    >
      {props.number}
    </h3>
  );
}

export default ViewIndicator;
