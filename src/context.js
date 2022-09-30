import React, { createContext, useContext, useState, useRef } from "react";

const Context = createContext();

export const StateContext = ({ children }) => {
  const [files, setNewFiles] = useState([]);
  const [selected, setSelected] = useState(null);
  const viewref = useRef([]);
  const volcontref = useRef([]);

  const updateFiles = (fileuri) => {
    setNewFiles((files) => [...files, fileuri]);
  };

  const updateSelected = (index) => {
    if (selected === index) setSelected(null);
    else setSelected(index);
  };

  return (
    <Context.Provider
      value={{
        selected,
        files,
        viewref,
        volcontref,
        updateFiles,
        updateSelected,
      }}
    >
      {children}
    </Context.Provider>
  );
};

export const useStateContext = () => useContext(Context);
