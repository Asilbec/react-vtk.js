import React from "react";
import { useStateContext } from "../context";
import { CircularProgress } from "@mui/material";

export default function LoadingScreen() {
  const { loaded } = useStateContext();
  return (
    <div
      style={{
        position: "absolute",
        zIndex: 1020,
        height: "100vh",
        width: "100%",
        background: "#252526",
        display: loaded ? "none" : "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <CircularProgress size={100} />
    </div>
  );
}
