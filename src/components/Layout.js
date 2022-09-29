import React from "react";
// import FileInput from "./FileInput";
// import Viewer from "./Reader";
// import LoadingScreen from "./LoadingScreen";
import TestReader from "./testReader";
// import { useStateContext } from "../context";

function Layout() {
  // const { menu } = useStateContext();
  return (
    <div className="layout">
      {/* <FileInput />
      <LoadingScreen />
      {!menu && <Viewer />} */}
      <TestReader />
    </div>
  );
}

export default Layout;
