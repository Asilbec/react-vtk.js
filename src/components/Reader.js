import { React, useRef, useContext, useEffect } from "react";
import { useStateContext } from "../context";
import ViewIndicator from "./Viewindicator";
import ControlBar from "./ControlBar";
import {
  View,
  ShareDataSet,
  SliceRepresentation,
  Reader,
  Contexts,
  VolumeController,
  VolumeRepresentation,
} from "react-vtk-js";

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

function DisableView() {
  const view = useContext(Contexts.ViewContext);
  const { modelOne } = useStateContext();
  useEffect(() => {
    view.renderView();
  }, [modelOne]);
  return null;
}

function DisableViewTwo() {
  const view = useContext(Contexts.ViewContext);
  const { modelTwo } = useStateContext();
  useEffect(() => {
    view.renderView();
  }, [modelTwo]);
  return null;
}

function Viewer() {
  const {
    iSlice,
    jSlice,
    kSlice,
    colorWindow,
    colorLevel,
    colorPreset,
    singleView,
    viewOne,
    viewTwo,
    viewThree,
    viewFour,
    uploadedFile,
    volumeControllerDiv,
    updateLoaded,
    modelRef,
    modelTwoRef,
  } = useStateContext();

  useEffect(() => {
    // setTimeout(() => {
    //   updateiSlice(0);
    //   updatejSlice(0);
    //   updatekSlice(0);
    // }, 3000);
    const interval = setInterval(() => {
      if (modelRef.current.validData) {
        clearInterval(interval);
        updateLoaded();
      } else {
        console.log("not loaded yet");
      }
    }, 3000);
    // used to make sure the views render upon loading
    //done to prevent missing depencay error
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div
      style={{
        width: "100vw",
        height: "100vh",
        position: "absolute",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        boxSizing: "border-box",
        padding: "5px",
        paddingLeft: "0px",
      }}
    >
      <ShareDataSet>
        <Reader vtkClass="vtkXMLImageDataReader" url={uploadedFile} />
      </ShareDataSet>
      <div style={{ width: "100%", height: "100%", display: "flex" }}>
        <ControlBar />
        <div
          style={{
            width: "100%",
            height: "100%",
            display: "grid",
            gap: "5px",
            gridTemplateColumns: singleView ? " auto" : "auto auto",
          }}
          id="DivContainerForViews"
        >
          <div style={{ display: viewOne ? "flex" : "none" }}>
            <View
              id="0"
              cameraPosition={[0, 0, 1]}
              cameraViewUp={[0, 1, 0]}
              cameraParallelProjection={true}
              background={[0, 0, 0]}
              className="one"
            >
              <ShareDataSet>
                <Reader vtkClass="vtkXMLImageDataReader" url={uploadedFile} />
              </ShareDataSet>

              <SliceRepresentation
                kSlice={kSlice}
                property={{
                  colorWindow,
                  colorLevel,
                }}
                colorMapPreset={colorPreset}
              >
                <ViewIndicator number={"K"} />
                <ShareDataSet />
                <DisableMouse />
              </SliceRepresentation>
            </View>
          </div>

          <div style={{ display: viewTwo ? "flex" : "none" }}>
            <View
              id="1"
              cameraPosition={[360, 0, 0]}
              cameraViewUp={[0, 0, -1]}
              cameraParallelProjection={true}
              background={[0, 0, 0]}
              className="two"
            >
              <ShareDataSet>
                <Reader vtkClass="vtkXMLImageDataReader" url={uploadedFile} />
              </ShareDataSet>

              <SliceRepresentation
                iSlice={iSlice}
                property={{
                  colorWindow,
                  colorLevel,
                }}
                colorMapPreset={colorPreset}
              >
                <ViewIndicator number={"I"} />
                <ShareDataSet />
                <DisableMouse />
              </SliceRepresentation>
            </View>
          </div>

          <div style={{ display: viewThree ? "flex" : "none" }}>
            <View
              id="2"
              cameraPosition={[0, -180, 0]}
              cameraViewUp={[0, 0, -1]}
              cameraParallelProjection={true}
              background={[0, 0, 0]}
              className="three"
            >
              <ShareDataSet>
                <Reader vtkClass="vtkXMLImageDataReader" url={uploadedFile} />
              </ShareDataSet>
              <SliceRepresentation
                jSlice={jSlice}
                property={{
                  colorWindow,
                  colorLevel,
                }}
                colorMapPreset={colorPreset}
              >
                <ViewIndicator number={"J"} />

                <ShareDataSet />
                <DisableMouse />
              </SliceRepresentation>
            </View>
          </div>

          <div style={{ display: viewFour ? "flex" : "none" }}>
            <View
              id="0"
              background={[255, 255, 255]}
              cameraPosition={[1, 0, 0]}
              cameraViewUp={[0, 0, -1]}
              cameraParallelProjection={false}
              className="four"
            >
              <div>
                <VolumeRepresentation ref={modelRef}>
                  <ViewIndicator number={"Volume"} />
                  <div
                    style={{
                      display: volumeControllerDiv ? "none" : "flex",
                    }}
                  >
                    <VolumeController />
                  </div>
                  <ShareDataSet />
                  <DisableView />
                </VolumeRepresentation>
              </div>

              <VolumeRepresentation ref={modelTwoRef}>
                <ViewIndicator number={"Volume"} />
                <div
                  style={{
                    display: volumeControllerDiv ? "flex" : "none",
                  }}
                >
                  <VolumeController />
                </div>
                <ShareDataSet />
                <DisableViewTwo />
              </VolumeRepresentation>
            </View>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Viewer;
