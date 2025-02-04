"use client";
import {
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useRef,
  useState,
} from "react";
import Map from "@arcgis/core/Map";
import MapView from "@arcgis/core/views/MapView";
import FeatureLayer from "@arcgis/core/layers/FeatureLayer";
import Zoom from "@arcgis/core/widgets/Zoom";
import Expand from "@arcgis/core/widgets/Fullscreen";
import { defaultLayer, DOMAIN, mapLayer } from "@/constants";
import "./index.css";
import { MapFilterContext } from "@/contexts/mapFilterContext";

const ArcgisMap = () => {
  const mapRef = useRef(null);

  const { selectedDisaster, search, filterValues } =
    useContext(MapFilterContext);

  const formatQuery = useCallback(
    (url) => {
      const params = new URLSearchParams();
      if (search?.province?.value) {
        params.append("province_name_th", search.province.value);
      }

      if (search?.amphoe?.value) {
        params.append("amphoe_name_th", search.amphoe.value);
      }
      return `${url}/?${params.toString()}`;
    },
    [search]
  );

  const map = useMemo(
    () =>
      new Map({
        basemap: "topo",
      }),
    []
  );

  const view = useMemo(() => {
    if (mapRef?.current) {
      return new MapView({
        container: mapRef.current,
        map: map,
        center: search?.amphoe?.location || search?.province?.location,
        zoom: 9,
      });
    }
  }, [map, mapRef, search]);

  const layer = useMemo(() => {
    const result = Object.values(filterValues)
      .flatMap((obj) => Object.entries(obj)) // Convert nested objects into key-value pairs
      .filter(([_, value]) => value === true) // Keep only true values
      .map(([key]) => key);
    return Object.entries(mapLayer)
      .filter(([_, values]) => values.some((value) => result.includes(value)))
      .map(([key]) => Number(key))
      .sort();
  }, [filterValues]);

  useEffect(() => {
    if (mapRef.current && view) {
      const zoomWidget = new Zoom({
        view: view,
      });

      const expandWidget = new Expand({
        view: view,
      });

      view.ui.add(zoomWidget, "top-right");
      view.ui.add(expandWidget, "top-right");

      defaultLayer?.[search?.province?.value].forEach((url) => {
        const featureLayer = new FeatureLayer({
          url: formatQuery(`${DOMAIN}${url}`),
        });
        map?.add(featureLayer);
      });

      if (layer) {
        layer?.forEach((url) => {
          const featureLayer = new FeatureLayer({
            url: formatQuery(`${DOMAIN}${url}`),
          });
          map?.add(featureLayer);
        });
      }
    }
  }, [mapRef, search, defaultLayer, layer, view]);

  console.log("layer ", layer);

  // useEffect(() => {
  //   layer?.forEach((url) => {
  //     const featureLayer = new FeatureLayer({
  //       url: formatQuery(`${DOMAIN}${url}`),
  //     });
  //     console.log("map", map);
  //     map.add(featureLayer);
  //   });
  // }, [map, layer]);

  return (
    <div className="map w-full max-h-[46rem] h-[46rem]" ref={mapRef}></div>
  );
};

export default ArcgisMap;
