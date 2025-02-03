"use client";
import { useEffect, useRef } from "react";
import Map from "@arcgis/core/Map";
import MapView from "@arcgis/core/views/MapView";
import FeatureLayer from "@arcgis/core/layers/FeatureLayer";
import Zoom from "@arcgis/core/widgets/Zoom";
import Expand from "@arcgis/core/widgets/Fullscreen";
import "./index.css";
import { LAYER_RUL } from "@/constants";

export const ArcgisMap = () => {
  const mapRef = useRef(null);

  useEffect(() => {
    if (mapRef.current) {
      const map = new Map({
        basemap: "topo",
      });

      const view = new MapView({
        container: mapRef.current,
        map: map,
        center: [100.11, 14.47],
        zoom: 9,
      });

      LAYER_RUL.forEach((url) => {
        const featureLayer = new FeatureLayer({
          url: url,
        });
        map.add(featureLayer);
      });

      const zoomWidget = new Zoom({
        view: view,
      });

      const expandWidget = new Expand({
        view: view,
      });
      view.ui.add(zoomWidget, "top-right");
      view.ui.add(expandWidget, "top-right");
    }
  }, [mapRef]);

  return <div className="w-full max-h-[42rem] h-[42rem]" ref={mapRef}></div>;
};
