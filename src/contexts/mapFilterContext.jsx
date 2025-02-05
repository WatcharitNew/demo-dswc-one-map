"use client";

import { createContext, useState, useCallback } from "react";

export const MapFilterContext = createContext(null);

const MapFilterContextProvider = ({ children }) => {
  const [filterValues, setFilterValues] = useState({});
  const [selectedDisaster, setSelectedDisaster] = useState();
  const [search, setSeach] = useState();

  const onChangeSearch = (value) => {
    setSeach((prev) => ({ ...prev, ...value }));
  };

  const updateMapLayers = useCallback(async (newFilters) => {
    // TODO: call BE API
    console.log(newFilters);
  }, []);

  const handleRadioChange = useCallback(
    (section, value, checked) => {
      const newFilters = {
        ...filterValues,
        [section]: {
          [value]: checked,
        },
      };
      setFilterValues(newFilters);
      updateMapLayers(newFilters);
    },
    [filterValues, updateMapLayers]
  );

  const handleSwitchChange = useCallback(
    (section, value, checked) => {
      const newFilters = {
        ...filterValues,
        [section]: {
          ...filterValues[section],
          [value]: checked,
        },
      };
      setFilterValues(newFilters);
      updateMapLayers(newFilters);
    },
    [filterValues, updateMapLayers]
  );

  const contextValue = {
    filterValues,
    setFilterValues,
    handleRadioChange,
    handleSwitchChange,
    selectedDisaster,
    setSelectedDisaster,
    search,
    onChangeSearch,
  };

  return (
    <MapFilterContext.Provider value={contextValue}>
      {children}
    </MapFilterContext.Provider>
  );
};

export default MapFilterContextProvider;
