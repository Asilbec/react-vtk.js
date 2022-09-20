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

function GetSliceSize() {
  const views = useContext(Contexts.ViewContext);
  const view = useContext(Contexts.DownstreamContext);
  const clicks = useRef(0);
  useEffect(() => {
    clicks.current = 0;
    views.interactor.onRightButtonPress(() => {
      console.log(view.getBounds());
    });
  }, [views]);
  return null;
}

function Viewer() {
  const {
    iSlice,
    jSlice,
    kSlice,
    updateiSlice,
    updatejSlice,
    updatekSlice,
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
  } = useStateContext();

  useEffect(() => {
    setTimeout(() => {
      updateiSlice(129);
      updatejSlice(129);
      updatekSlice(47);
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
              <SliceRepresentation iSlice={iSlice}>
                <ShareDataSet />
              </SliceRepresentation>
              <SliceRepresentation kSlice={kSlice}>
                <ShareDataSet />
              </SliceRepresentation>
              <SliceRepresentation jSlice={jSlice}>
                <ShareDataSet />
              </SliceRepresentation>

              <VolumeRepresentation>
                <ViewIndicator number={"Volume"} />
                <div
                  style={{
                    display: volumeControllerDiv ? "none" : "flex",
                  }}
                >
                  <VolumeController />
                </div>
                <ShareDataSet />
              </VolumeRepresentation>
              <VolumeRepresentation>
                <ViewIndicator number={"Volume"} />
                <div
                  style={{
                    display: volumeControllerDiv ? "flex" : "none",
                  }}
                >
                  <VolumeController />
                </div>
                <ShareDataSet />
                <GetSliceSize />
              </VolumeRepresentation>
            </View>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Viewer;
