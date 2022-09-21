import React from "react";
import FileInput from "./FileInput";
import { useStateContext } from "../context";
import Viewer from "./Reader";
import LoadingScreen from "./LoadingScreen";

function Layout() {
  const { menu } = useStateContext();
  return (
    <div className="layout">
      <FileInput />
      <LoadingScreen />
      {!menu && <Viewer />}
    </div>
  );
}

export default Layout;
