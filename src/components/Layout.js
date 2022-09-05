import React from "react";
import FileInput from "./FileInput";
import { useStateContext } from "../context";
import Example from "./Reader";

function Layout() {
  const { menu } = useStateContext();
  return (
    <div className="layout">
      <FileInput />
      {!menu && <Example />}
    </div>
  );
}

export default Layout;
