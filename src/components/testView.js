import React from "react";
import { useStateContext } from "../context";
import { View, Contexts } from "react-vtk-js";
import { useRef, useEffect, useContext } from "react";

export default function TestingView() {
  const viewref = useRef();
  useEffect(() => {
    console.log(viewref);
  }, []);

  return (
    <div style={{ height: "100vh", width: "100vw" }}>
      <View
        id="0"
        cameraPosition={[0, 0, 1]}
        cameraViewUp={[0, 1, 0]}
        cameraParallelProjection={true}
        background={[255, 255, 255]}
        className="one"
        ref={viewref}
      ></View>
    </div>
  );
}
