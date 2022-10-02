import React, { createContext, useContext, useState, useRef } from "react";

const Context = createContext();

export const StateContext = ({ children }) => {
  const [files, setNewFiles] = useState([]);
  const [selected, setSelected] = useState(null);
  const viewref = useRef([]);
  const volcontref = useRef([]);
  const volconpointref = useRef([]);
  const [selectedMap, setSelectedMap] = useState(0);
  const [graphlist, setGraphList] = useState([
    [1, 2],
    [1, 2],
  ]);

  const updateFiles = (fileuri) => {
    setNewFiles((files) => [...files, fileuri]);
  };

  const updateSelected = (index) => {
    if (selected === index) {
      setSelected(null);
      setSelectedMap(index);
    } else setSelected(index);
  };

  const updateGraphList = (item) => {
    setGraphList((graphlist) => [...graphlist, item]);
  };

  const updateSelectedMap = (index) => {
    setSelectedMap(index);
  };

  const addtoMap = (index) => {
    graphlist[index].push(1);
    setGraphList(graphlist);
  };

  return (
    <Context.Provider
      value={{
        selected,
        files,
        viewref,
        volcontref,
        volconpointref,
        selectedMap,
        graphlist,
        updateFiles,
        updateSelected,
        updateGraphList,
        updateSelectedMap,
        addtoMap,
      }}
    >
      {children}
    </Context.Provider>
  );
};

export const useStateContext = () => useContext(Context);
