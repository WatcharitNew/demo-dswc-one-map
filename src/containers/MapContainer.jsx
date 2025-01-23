"use client";

import { useContext } from "react";
import { Image } from "@mantine/core";

import { MainContext } from "@/contexts/mainContext";

import { MapLabel } from "@/components";
import { MapFilter } from ".";

export const MapContainer = () => {
  const { selectedDisaster } = useContext(MainContext);

  return (
    <div className="bg-white p-3">
      <div className="h-[42rem] relative">
        <Image alt="map" className="h-full" src="/map.png" />
        <MapFilter />
      </div>
      <MapLabel selectedDisaster={selectedDisaster} selectedInformation={[]}/>
    </div>
  );
};
