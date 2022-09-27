import React, { createContext, useContext, useState, useRef } from "react";
import * as tf from "@tensorflow/tfjs";

const Context = createContext();

export const StateContext = ({ children }) => {
  const [iSlice, setISlice] = useState(0);
  const [jSlice, setJSlice] = useState(0);
  const [kSlice, setKSlice] = useState(0);
  const [colorWindow, setColorWindow] = useState(2095);
  const [colorLevel, setColorLevel] = useState(1000);
  const [screen, setScreen] = useState(true);
  const [menu, setMenu] = useState(true);
  const [uploadedFile, setUploadedFile] = useState();
  const [colorPreset, setColorPresets] = useState("Grayscale");
  const [singleView, setSingleView] = useState(true);
  const [viewOne, setViewerOne] = useState(false);
  const [viewTwo, setViewTwo] = useState(false);
  const [viewThree, setViewThree] = useState(false);
  const [viewFour, setViewFour] = useState(true);
  const [Viewindicator, setViewindicators] = useState(false);
  const [volumeControllerDiv, setVolumeController] = useState(false);
  const [slideMax, setSlideMax] = useState([0, 0, 0]);
  const [loaded, setLoaded] = useState(true);
  const [modelOne, setModelOne] = useState(true);
  const [modelTwo, setModelTwo] = useState(true);
  const modelRef = useRef();
  const modelTwoRef = useRef();
  const modelSliceK = useRef();

  const updateModelOne = () => {
    console.log(modelRef);
    if (modelOne) {
      modelRef.current.volume.setVisibility(false);
      setModelOne(false);
    } else {
      modelRef.current.volume.setVisibility(true);
      setModelOne(true);
    }
  };

  async function loadModel() {
    // //load the feature extraction portion of the model
    tf.loadLayersModel("/savedModels/model.json").then(function (loadedModel) {
      const featureExtraction = loadedModel;
      featureExtraction.summary();
      featureExtraction.summary();
    });
    //load the dense layers portion of the model
  }

  // const Prediction = () => {
  //   let resized = tf.browser
  //     .fromPixels(videoRef.current)
  //     .resizeBilinear([224, 224]);
  //   let normalized = tf.div(resized, 255);
  //   let data = tf.reshape(normalized, [1, 224, 224, 3]);
  //   let prediction;
  //   prediction = model.predict(data).arraySync();
  //   console.log(prediction);
  // };

  const updateModelTwo = () => {
    console.log(modelTwoRef.current.volume.get());
    if (modelTwo) {
      modelTwoRef.current.volume.setVisibility(false);
      setModelTwo(false);
    } else {
      modelTwoRef.current.volume.setVisibility(true);
      setModelTwo(true);
    }
  };

  const updateLoaded = () => {
    if (loaded) setLoaded(false);
    else setLoaded(true);
  };

  const updateVolumeController = () => {
    if (volumeControllerDiv) setVolumeController(false);
    else setVolumeController(true);
  };

  const updateSlideMax = (list) => {
    setSlideMax(list);
    console.log(list);
  };

  const updateCloseUp = (name) => {
    if (name === "one") {
      if (viewOne) {
        if (viewOne + viewTwo + viewThree + viewFour === 2) {
          setSingleView(true);
        }
        setViewerOne(false);
      } else {
        if (viewOne + viewTwo + viewThree + viewFour === 0) setSingleView(true);
        else setSingleView(false);
        setViewerOne(true);
      }
    }
    if (name === "two") {
      if (viewTwo) {
        if (viewOne + viewTwo + viewThree + viewFour === 2) {
          setSingleView(true);
        }
        setViewTwo(false);
      } else {
        if (viewOne + viewTwo + viewThree + viewFour === 0) setSingleView(true);
        else setSingleView(false);
        setViewTwo(true);
      }
    }

    if (name === "three") {
      if (viewThree) {
        if (viewOne + viewTwo + viewThree + viewFour === 2) {
          setSingleView(true);
        }
        setViewThree(false);
      } else {
        if (viewOne + viewTwo + viewThree + viewFour === 0) setSingleView(true);
        else setSingleView(false);
        setViewThree(true);
      }
    }

    if (name === "four") {
      if (viewFour) {
        if (viewOne + viewTwo + viewThree + viewFour === 2) {
          setSingleView(true);
        }
        setViewFour(false);
      } else {
        if (viewOne + viewTwo + viewThree + viewFour === 0) setSingleView(true);
        else setSingleView(false);
        setViewFour(true);
      }
    }
  };

  const updateUploadedFile = () => {
    setLoaded(false);
    const file = document.getElementById("customFiledInput").files[0];
    let reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = function () {
      setUploadedFile(reader.result);
      setMenu(false);
    };
    reader.onerror = function () {
      console.log(reader.error);
    };
  };

  const updateMenu = () => {
    if (menu) setMenu(false);
    else setMenu(true);
  };

  const updateiSlice = (number) => {
    setISlice(number);
  };

  const updatejSlice = (number) => {
    setJSlice(number);
  };

  const updatekSlice = (number) => {
    setKSlice(number);
  };

  const updateColorWindow = (number) => {
    setColorWindow(number);
  };

  const updateColorLevel = (number) => {
    setColorLevel(number);
  };

  const updateScreen = () => {
    if (screen) setScreen(false);
    else setScreen(true);
  };

  const updateColorPresets = (colorName) => {
    setColorPresets(colorName);
  };

  const updateSingleView = () => {
    if (singleView) setSingleView(false);
    else setSingleView(true);
  };

  const updateViewindicator = () => {
    if (Viewindicator) setViewindicators(false);
    else setViewindicators(true);
  };
  return (
    <Context.Provider
      value={{
        jSlice,
        iSlice,
        kSlice,
        colorWindow,
        colorLevel,
        screen,
        menu,
        uploadedFile,
        colorPreset,
        singleView,
        viewOne,
        viewTwo,
        viewThree,
        viewFour,
        volumeControllerDiv,
        slideMax,
        loaded,
        modelOne,
        modelTwo,
        updateMenu,
        updateiSlice,
        updatejSlice,
        updatekSlice,
        updateColorLevel,
        updateColorWindow,
        updateScreen,
        updateUploadedFile,
        updateColorPresets,
        updateSingleView,
        updateCloseUp,
        updateViewindicator,
        updateVolumeController,
        updateSlideMax,
        updateLoaded,
        updateModelOne,
        updateModelTwo,
        loadModel,
        modelRef,
        modelTwoRef,
        modelSliceK,
      }}
    >
      {children}
    </Context.Provider>
  );
};

export const useStateContext = () => useContext(Context);
