import React from "react";
import {
  View,
  Reader,
  VolumeController,
  VolumeRepresentation,
} from "react-vtk-js";
import ControlBar from "../File/ControlBar";
import { useStateContext } from "../../context";

function VolumeReturn(props) {
  const { files, viewref, selected, graphlist, selectedMap, volcontref } =
    useStateContext();
  const indexz = props.data;
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
    </VolumeRepresentation>
  );
}

function TestReader() {
  const { files } = useStateContext();

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
