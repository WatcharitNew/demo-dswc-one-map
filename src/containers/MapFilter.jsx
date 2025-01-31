"use client";

import { useContext } from "react";

import { MapFilterContext } from "@/contexts/mapFilterContext";
import { DISASTER_TYPE, FILTER_DATA, LEVEL } from "../constants";

import MapFilterComponent from "../components/MapFilter/MapFilterComponent";
import { MainContext } from "@/contexts/mainContext";

export const MapFilter = () => {
  const { filterValues, handleRadioChange, handleSwitchChange } =
    useContext(MapFilterContext);
  const { selectedDisaster, search } =
      useContext(MainContext);
  const filterData = FILTER_DATA[selectedDisaster || DISASTER_TYPE[0].value][search?.level?.value || LEVEL[0].value]

  return (
    <div className="w-fit bg-white rounded-lg max-h-[80vh] overflow-y-auto absolute top-10 left-4">
      <MapFilterComponent
        filterData={filterData}
        filterValues={filterValues}
        handleRadioChange={handleRadioChange}
        handleSwitchChange={handleSwitchChange}
      />
    </div>
  );
};
