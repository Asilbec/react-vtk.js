import React from "react";

function ViewIndicator(props) {
  return (
    <h3
      style={{
        position: "absolute",
        zIndex: 500,
        background: "transparent",
        width: "30px",
        bottom: 0,
        color: "white",
        textAlign: "center",
        fontWeight: 100,
      }}
    >
      {props.number}
    </h3>
  );
}

export default ViewIndicator;
