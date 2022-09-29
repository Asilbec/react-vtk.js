import React from "react";
import {
  View,
  Reader,
  VolumeController,
  VolumeRepresentation,
} from "react-vtk-js";
import ControlBar from "./File/ControlBar";
import { useStateContext } from "../context";

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
            <div key={index}>
              <VolumeRepresentation>
                <div style={{ display: "none" }}>
                  <VolumeController />
                </div>
                <Reader
                  vtkClass="vtkXMLImageDataReader"
                  url={files[index].uri}
                />
              </VolumeRepresentation>
            </div>
          ))}
        </View>
      )}
    </div>
  );
}

export default TestReader;