import React, { useState, useContext, useRef, useEffect } from "react";
import {
  View,
  Reader,
  VolumeController,
  VolumeRepresentation,
  ShareDataSet,
  SliceRepresentation,
  Contexts,
} from "react-vtk-js";
import { useStateContext } from "../../context";
import { Button, imageListClasses } from "@mui/material";
import { saveAs } from "file-saver";
import axios from "axios";
import myText from "./Text";

function DisableMouse() {
  const view = useContext(Contexts.ViewContext);
  const clicks = useRef(0);
  useEffect(() => {
    clicks.current = 0;
    view.interactor.onRightButtonPress(() => {
      // view.renderWindow.captureImages()[0].then((image) => {
      //   console.log(image);
      // });
      // console.log(view.renderer.getSize());
      // console.log(view.axesActor.getActors()[0].getXRange());
    });
    view.defaultStyle.setRotationFactor(0);
  }, [view]);
  return null;
}

function SliceReader() {
  const { files } = useStateContext();
  const jSliceRef = useRef();
  const [selected, setSelected] = useState(1);
  const [camera, setCamera] = useState([0, -180, 0]);
  const [iSlice, setISlice] = useState();
  const [jSlice, setJSlice] = useState(0);
  const [kSlice, setKSlice] = useState(0);
  const [colorWindow, setColorWindow] = useState(2095);
  const [colorLevel, setColorLevel] = useState(1000);
  const [colorPreset, setColorPreset] = useState("Grayscale");
  const [useLookupTableScalarRange, setUseLookupTableScalarRange] =
    useState(false);
  const [imagelist, setImageList] = useState([]);

  function changeCamera(n) {
    setSelected(n);
    console.log(jSliceRef);
    if (n === 1) {
      setCamera([360, 0, 0]);
    }
    if (n === 2) {
      setCamera([0, -180, 0]);
    }
    if (n === 3) {
      setCamera([0, 0, 1]);
    }
  }
  function printthings() {
    console.log(jSliceRef.current.axesActor.getBounds());
  }

  return (
    <div style={{ height: "100vh", width: "100%" }}>
      <div
        style={{
          width: "350px",
          height: "50px",
          display: "flex",
          gap: "5px",
          position: "absolute",
          zIndex: 9999,
          marginLeft: "5px",
          marginTop: "5px",
        }}
      >
        <Button
          variant={selected === 1 ? "contained" : "outlined"}
          style={{ width: "100%" }}
          onClick={() => changeCamera(1)}
        >
          1
        </Button>
        <Button
          variant={selected === 2 ? "contained" : "outlined"}
          style={{ width: "100%" }}
          onClick={() => changeCamera(2)}
        >
          2
        </Button>
        <Button
          variant={selected === 3 ? "contained" : "outlined"}
          style={{ width: "100%" }}
          onClick={() => changeCamera(3)}
        >
          3
        </Button>
        <Button
          variant="contained"
          style={{ width: "100%" }}
          onClick={() => console.log(imagelist)}
        >
          Print Image List
        </Button>
        <Button
          variant="contained"
          style={{ width: "100%" }}
          onClick={() => setImageList([])}
        >
          Clear
        </Button>

        <Button
          onClick={() => {
            const link = document.createElement("a");
            const content = imagelist[0];
            const file = new Blob([content], { type: "text/plain" });
            link.href = URL.createObjectURL(file);
            link.download = "sample.txt";

            const formData2 = new FormData();
            formData2.append("file", file);

            const requestOptions = {
              method: "POST",
              
              //headers: { 'Content-Type': 'multipart/form-data' }, // DO NOT INCLUDE HEADERS
              body: formData2,
            };
            fetch("http://127.0.0.1:8000/task/uploadfile/", requestOptions)
              .then(function(response) {
                return response.json();
              }).then(function(data) {
                console.log(data);
              });
                
            
            // axios
            //   .post("http://localhost:9000/text", {
            //     file: imagelist[0],
            //   })
            //   .then(function (response) {
            //     console.log(response);
            //   })
            //   .catch(function (error) {
            //     console.log(error);
            //   });
          }}
          variant="contained"
        >
          SAVE
        </Button>

        <input
          style={{
            width: "300px",
          }}
          onChange={(e) => {
            jSliceRef.current.renderWindow
              .captureImages([400, 400])[0]
              .then((image) => {
                setJSlice(e.target.value);
                setImageList((imagelist) => [...imagelist, image]);
              });
          }}
          type={"range"}
          max={100}
          min={0}
          step={10}
        ></input>
      </div>

      <div
        style={{
          position: "absolute",
          zIndex: 300,
          width: 200,
          height: 50,
          position: "absolute",
          left: 0,
          right: 0,
          marginRight: "auto",
          marginLeft: "auto",
          bottom: 10,
          backgroundColor: "black",
          borderRadius: 10,
        }}
      >
        Results
      </div>

      <View
        id="1"
        cameraPosition={camera}
        cameraViewUp={[0, 0, -1]}
        cameraParallelProjection={true}
        background={[32, 40, 4]}
        className="two"
        ref={jSliceRef}
      >
        <ShareDataSet>
          <Reader vtkClass="vtkXMLImageDataReader" url={files[0].uri} />
        </ShareDataSet>

        <SliceRepresentation
          iSlice={iSlice}
          property={{
            colorWindow,
            colorLevel,
            useLookupTableScalarRange,
          }}
          cameraParallelProjection={false}
          colorMapPreset={colorPreset}
        >
          <ShareDataSet />
          <DisableMouse />
        </SliceRepresentation>

        <SliceRepresentation
          jSlice={jSlice}
          property={{
            colorWindow,
            colorLevel,
            useLookupTableScalarRange,
          }}
          cameraParallelProjection={false}
          colorMapPreset={colorPreset}
        >
          <ShareDataSet />
          <DisableMouse />
        </SliceRepresentation>
        <SliceRepresentation
          kSlice={kSlice}
          property={{
            colorWindow,
            colorLevel,
            useLookupTableScalarRange,
          }}
          cameraParallelProjection={false}
          colorMapPreset={colorPreset}
        >
          <ShareDataSet />
          <DisableMouse />
        </SliceRepresentation>
      </View>
    </div>
  );
}

export default SliceReader;
