import React from "react";
import FileInput from "./FileInput";
import { useStateContext } from "../context";
import Viewer from "./Reader";

function Layout() {
  const { menu } = useStateContext();
  return (
    <div className="layout">
      <FileInput />
      {!menu && <Viewer />}
    </div>
  );
}

export default Layout;
