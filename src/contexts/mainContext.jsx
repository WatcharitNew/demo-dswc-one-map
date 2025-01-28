"use client";
import { createContext, useState } from "react";

export const MainContext = createContext(null);

const MainContextProvider = ({ children }) => {
  const [selectedDisaster, setSelectedDisaster] = useState();
  const [search, setSeach] = useState();

  const onChangeSearch = (value) => {
    setSeach((prev) => ({ ...prev, ...value }));
  };
  const contextValue = {
    selectedDisaster,
    setSelectedDisaster,
    search,
    onChangeSearch,
  };
  return (
    <MainContext.Provider value={contextValue}>{children}</MainContext.Provider>
  );
};

export default MainContextProvider;
