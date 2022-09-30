import React, { createContext, useContext, useState, useRef } from "react";

const Context = createContext();

export const StateContext = ({ children }) => {
  const [files, setNewFiles] = useState([]);
  const [selected, setSelected] = useState(0);
  const viewref = useRef([]);

  const updateFiles = (fileuri) => {
    setNewFiles((files) => [...files, fileuri]);
  };

  const updateSelected = (index) => {
    setSelected(index);
  };

  return (
    <Context.Provider
      value={{
        selected,
        files,
        viewref,
        updateFiles,
        updateSelected,
      }}
    >
      {children}
    </Context.Provider>
  );
};

export const useStateContext = () => useContext(Context);
