"use client";

import { useContext, useMemo } from "react";
import { Image } from "@mantine/core";

import { MainContext } from "@/contexts/mainContext";
import { MapFilterContext } from "@/contexts/mapFilterContext";

import { MapLabel } from "@/components";
import { MapFilter } from ".";

export const MapContainer = () => {
  const { selectedDisaster } = useContext(MainContext);
  const { filterValues } = useContext(MapFilterContext)

  const selectedInformation = useMemo(() => {
    const importentKeys = Object.keys(filterValues.importentPlace || {}).filter(key => filterValues.importentPlace[key]);
    const populationKeys = Object.keys(filterValues.populationData || {}).filter(key => filterValues.populationData[key]);

    return importentKeys.concat(populationKeys)
  }, [filterValues])

  return (
    <div className="bg-white p-3">
      <div className="h-[42rem] relative">
        <Image alt="map" className="h-full" src="/map.png" />
        <MapFilter />
      </div>
      <MapLabel selectedDisaster={selectedDisaster} selectedInformation={selectedInformation}/>
    </div>
  );
};
