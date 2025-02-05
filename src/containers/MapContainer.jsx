"use client";

import { useContext, useMemo } from "react";
import dynamic from "next/dynamic";
import { MapFilterContext } from "@/contexts/mapFilterContext";
import { MapLabel } from "@/components";
import { MapFilter } from ".";

const ArcgisMap = dynamic(() => import("../components/Map"), {
  ssr: false,
});

export const MapContainer = () => {
  const { filterValues, selectedDisaster } = useContext(MapFilterContext);

  const selectedInformation = useMemo(() => {
    const importentKeys = Object.keys(filterValues.importentPlace || {}).filter(
      (key) => filterValues.importentPlace[key]
    );
    const populationKeys = Object.keys(
      filterValues.populationData || {}
    ).filter((key) => filterValues.populationData[key]);

    return importentKeys.concat(populationKeys);
  }, [filterValues]);

  return (
    <div className="bg-white p-3">
      <div className="w-full h-[46rem] relative">
        <ArcgisMap />
        <MapFilter />
      </div>
      <MapLabel
        selectedDisaster={selectedDisaster}
        selectedInformation={selectedInformation}
      />
    </div>
  );
};
