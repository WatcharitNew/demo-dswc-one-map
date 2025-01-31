"use client";

import { createContext, useState, useCallback } from "react";

export const MapFilterContext = createContext(null);

const MapFilterContextProvider = ({ children }) => {
  const [filterValues, setFilterValues] = useState({});

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
  };

  return (
    <MapFilterContext.Provider value={contextValue}>
      {children}
    </MapFilterContext.Provider>
  );
};

export default MapFilterContextProvider;
