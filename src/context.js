import React, { createContext, useContext, useState } from "react";
const Context = createContext();

export const StateContext = ({ children }) => {
  const [iSlice, setISlice] = useState(128);
  const [jSlice, setJSlice] = useState(128);
  const [kSlice, setKSlice] = useState(47);
  const [colorWindow, setColorWindow] = useState(2095);
  const [colorLevel, setColorLevel] = useState(1000);
  const [screen, setScreen] = useState(true);
  const [menu, setMenu] = useState(true);
  const [uploadedFile, setUploadedFile] = useState();
  const [colorPreset, setColorPresets] = useState("Grayscale");
  const [singleView, setSingleView] = useState(false);
  const [viewOne, setViewerOne] = useState(true);
  const [viewTwo, setViewTwo] = useState(true);
  const [viewThree, setViewThree] = useState(true);
  const [viewFour, setViewFour] = useState(true);
  const [Viewindicator, setViewindicators] = useState(false);
  const [cameraOne, setCameraOne] = useState([0, 0, 1]);

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
        cameraOne,
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
      }}
    >
      {children}
    </Context.Provider>
  );
};

export const useStateContext = () => useContext(Context);
