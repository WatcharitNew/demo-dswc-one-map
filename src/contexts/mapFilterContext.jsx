"use client";

import { MAP_OPTIONS, DEFAULT_FILTER_DATA } from "@/constants";
import { createContext, useState, useCallback, useEffect } from "react";

export const MapFilterContext = createContext(null);

const MapFilterContextProvider = ({ children }) => {
  const [filterValues, setFilterValues] = useState({});
  const [selectedDisaster, setSelectedDisaster] = useState();
  const [search, setSeach] = useState({
    province: MAP_OPTIONS.find((item) => item.label === "สุพรรณบุรี"),
  });

  const onChangeSearch = (value) => {
    setSeach((prev) => ({ ...prev, ...value }));
  };

  const handleRadioChange = useCallback(
    (section, value, checked) => {
      const newFilters = {
        ...filterValues,
        [section]: {
          [value.label]: checked ? value.layer : undefined,
        },
      };
      setFilterValues(newFilters);
    },
    [filterValues]
  );

  const handleSwitchChange = useCallback(
    (section, label, checked, layer) => {
      const newFilters = {
        ...filterValues,
        [section]: {
          ...filterValues[section],
          [label]: checked ? layer : undefined,
        },
      };
      setFilterValues(newFilters);
    },
    [filterValues]
  );

  useEffect(() => {
    if (search?.level && selectedDisaster) {
      setFilterValues(
        DEFAULT_FILTER_DATA[selectedDisaster][search.level.value] ?? {}
      );
    }
  }, [search, selectedDisaster]);

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
