import React from "react";
import { useStateContext } from "../context";
import { Button } from "@mui/material";

function GroupButton() {
  const { viewOne, viewTwo, viewThree, viewFour, updateCloseUp } =
    useStateContext();

  return (
    <div
      style={{
        display: "grid",
        gridTemplateColumns: "auto auto",
        gap: "10px",
      }}
    >
      <Button
        onClick={() => {
          updateCloseUp("one");
        }}
        variant={viewOne ? "contained" : "outlined"}
      >
        Slice One
      </Button>

      <Button
        onClick={() => {
          updateCloseUp("two");
        }}
        variant={viewTwo ? "contained" : "outlined"}
      >
        Slice Two
      </Button>

      <Button
        onClick={() => {
          updateCloseUp("three");
        }}
        variant={viewThree ? "contained" : "outlined"}
      >
        Slice Three
      </Button>

      <Button
        onClick={() => {
          updateCloseUp("four");
        }}
        variant={viewFour ? "contained" : "outlined"}
      >
        3D view
      </Button>
    </div>
  );
}
export default GroupButton;
