import React, { createContext, useContext, useState, useRef } from "react";

const Context = createContext();

export const StateContext = ({ children }) => {
  const [files, setNewFiles] = useState([]);
  const [selected, setSelected] = useState(null);
  const viewref = useRef([]);
  const volcontref = useRef([]);
  const volconpointref = useRef([]);
  const [selectedMap, setSelectedMap] = useState(0);
  const [graphlist, setGraphList] = useState([]);

  const updateFiles = (fileuri) => {
    setNewFiles((files) => [...files, fileuri]);
  };

  const updateSelected = (index) => {
    if (selected === index) setSelected(null);
    else setSelected(index);
  };

  const updateGraphList = (item) => {
    setGraphList((files) => [...graphlist, item]);
  };

  return (
    <Context.Provider
      value={{
        selected,
        files,
        viewref,
        volcontref,
        volconpointref,
        updateFiles,
        updateSelected,
        updateGraphList,
      }}
    >
      {children}
    </Context.Provider>
  );
};

export const useStateContext = () => useContext(Context);
