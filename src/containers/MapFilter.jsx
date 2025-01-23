"use client";

import { useContext } from "react";

import { MapFilterContext } from "@/contexts/mapFilterContext";
import { FILTER_DATA } from "../constants";

import MapFilterComponent from "../components/MapFilter/MapFilterComponent";

export const MapFilter = () => {
  const { filterValues, handleRadioChange, handleSwitchChange } =
    useContext(MapFilterContext);

  return (
    <div className="w-fit bg-white rounded-lg max-h-[80vh] overflow-y-auto absolute top-10 left-4">
      <MapFilterComponent
        filterData={FILTER_DATA}
        filterValues={filterValues}
        handleRadioChange={handleRadioChange}
        handleSwitchChange={handleSwitchChange}
      />
    </div>
  );
};
