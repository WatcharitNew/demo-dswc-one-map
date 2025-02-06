"use client";
import { useCallback, useContext, useEffect, useMemo, useRef } from "react";
import Map from "@arcgis/core/Map";
import MapView from "@arcgis/core/views/MapView";
import FeatureLayer from "@arcgis/core/layers/FeatureLayer";
import Zoom from "@arcgis/core/widgets/Zoom";
import Expand from "@arcgis/core/widgets/Fullscreen";
import { defaultLayer, DOMAIN, mapLayer } from "@/constants";
import { MapFilterContext } from "@/contexts/mapFilterContext";
import "./index.css";

const ArcgisMap = () => {
  const mapRef = useRef(null);

  const { search, filterValues } = useContext(MapFilterContext);

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
    [search.province, search.amphoe]
  );

  const map = useMemo(
    () =>
      new Map({
        basemap: "topo",
      }),
    [search.province, search.amphoe]
  );

  /// create all layer and add to map but hide it
  const allFeatureLayer = useMemo(() => {
    return Object.keys(mapLayer).map((url) => {
      const layer = new FeatureLayer({
        url: formatQuery(`${DOMAIN}${url}`),
      });
      map.add(layer);
      layer.visible = false;
      return {
        layer: layer,
        key: Number(url),
      };
    });
  }, [map, formatQuery]);

  useEffect(() => {}, [map, search.province, search.amphoe]);

  useEffect(() => {
    if (mapRef.current) {
      const mapView = new MapView({
        container: mapRef.current,
        map: map,
        center: search?.amphoe?.location || search?.province?.location,
        zoom: search?.amphoe?.location ? 14 : 10,
      });

      const zoomWidget = new Zoom({
        view: mapView,
      });

      const expandWidget = new Expand({
        view: mapView,
      });

      mapView.ui.add(zoomWidget, "top-right");
      mapView.ui.add(expandWidget, "top-right");
    }
  }, [map, mapRef, search?.amphoe, search?.province]);

  // map filterValues with layer id
  const layer = useMemo(() => {
    if (Object.values(filterValues).length === 0) {
      return [];
    }
    const result = Object.values(filterValues)
      .flatMap((obj) => Object.entries(obj))
      .filter(([_, value]) => value === true)
      .map(([key]) => key);

    return Object.entries(mapLayer)
      .filter(([_, values]) => values.some((value) => result.includes(value)))
      .map(([key]) => Number(key))
      .sort((a, b) => a - b);
  }, [filterValues]);

  console.log("layer", layer);
  // add default layer when change province or amphoe
  useEffect(() => {
    defaultLayer?.[search?.province?.value].forEach((url) => {
      const featureLayer = new FeatureLayer({
        url: formatQuery(`${DOMAIN}${url}`),
      });
      map?.add(featureLayer);
    });
  }, [formatQuery, map, search?.province]);

  //show and hide layer depend on filterValues
  useEffect(() => {
    allFeatureLayer?.forEach((item) => {
      if (layer.includes(item.key)) {
        item.layer.visible = true;
      } else {
        item.layer.visible = false;
      }
    });
  }, [layer, allFeatureLayer]);

  return (
    <div className="map w-full max-h-[46rem] h-[46rem]" ref={mapRef}></div>
  );
};

export default ArcgisMap;
