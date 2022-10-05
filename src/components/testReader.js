import React, { useContext, useEffect } from "react";
import {
  View,
  Reader,
  VolumeController,
  VolumeRepresentation,
  Contexts,
} from "react-vtk-js";
import ControlBar from "./File/ControlBar";
import { useStateContext } from "../context";

function DisableView() {
  const view = useContext(Contexts.RepresentationContext);
  const { selectedMap } = useStateContext();
  useEffect(() => {
    console.log(view);
  }, [selectedMap]);
  return null;
}

function VolumeReturn(props) {
  const { files, viewref, selected, graphlist, selectedMap, volcontref } =
    useStateContext();
  const indexz = props.data;

  useEffect(() => {
    console.log(volcontref.current[selectedMap].controller.get());
    console.log("nice");
    console.log(
      document
        .getElementsByClassName(
          "VolumeController-module_piecewiseEditor__2_jav js-pwf js-toggle"
        )
        [selectedMap].children[0].click()
    );
  }, [selectedMap]);

  return (
    <VolumeRepresentation
      ref={(element) => {
        viewref.current[indexz] = element;
      }}
    >
      <div style={{ display: selected === indexz ? "flex" : "none" }}>
        {graphlist[selectedMap].map((list, index) => (
          <div
            key={index}
            style={{
              display: selectedMap === index ? "flex" : "none",
            }}
          >
            <VolumeController
              ref={(element) => {
                volcontref.current[index] = element;
              }}
              key={index}
            />
          </div>
        ))}
      </div>
      <Reader vtkClass="vtkXMLImageDataReader" url={files[indexz].uri} />
      {/* <DisableView></DisableView> */}
    </VolumeRepresentation>
  );
}

function TestReader() {
  const { files, viewref, selected, graphlist, selectedMap, volcontref } =
    useStateContext();

  return (
    <div
      style={{
        width: "100%",
        height: "100vh",
        display: "flex",
        flexDirection: "row-reverse",
      }}
    >
      <ControlBar />
      {files.length > 0 && (
        <View
          id="0"
          background={[255, 255, 255]}
          cameraPosition={[1, 0, 0]}
          cameraViewUp={[0, 0, -1]}
          cameraParallelProjection={false}
          className="four"
        >
          {files.map((file, index) => (
            <VolumeReturn data={index} key={index}></VolumeReturn>
          ))}
        </View>
      )}
    </div>
  );
}

export default TestReader;
