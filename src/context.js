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
    [1, 2, 3],
    [1, 2, 3],
  ]);
  const [filenamelist, setfilenamelist] = useState();
  const [updated, setupdated] = useState();

  const updateFiles = (fileuri) => {
    setNewFiles((files) => [...files, fileuri]);
    setGraphList((graphlist) => [...graphlist, [1, 2, 3]]);
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
        filenamelist,
        updateFiles,
        updateSelected,
        updateGraphList,
        updateSelectedMap,
        addtoMap,
        setfilenamelist,
        updated,
      }}
    >
      {children}
    </Context.Provider>
  );
};

export const useStateContext = () => useContext(Context);
