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

  const [viewOne, setViewerOne] = useState(false);
  const [viewTwo, setViewTwo] = useState(false);
  const [viewThree, setViewThree] = useState(false);
  const [viewFour, setViewFour] = useState(false);

  const updateCloseUp = (name) => {
    if (name === "one") {
      closeCloseUp();
      setViewerOne(true);
    }
    if (name === "two") {
      closeCloseUp();
      setViewTwo(true);
    }
    if (name === "three") {
      closeCloseUp();
      setViewThree(true);
    }
    if (name === "four") {
      closeCloseUp();
      setViewFour(true);
    }
  };

  const closeCloseUp = () => {
    setViewerOne(false);
    setViewTwo(false);
    setViewThree(false);
    setViewFour(false);
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
        closeCloseUp,
        updateCloseUp,
      }}
    >
      {children}
    </Context.Provider>
  );
};

export const useStateContext = () => useContext(Context);
