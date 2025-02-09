"use client";
import { useCallback, useContext, useEffect, useMemo, useRef } from "react";
import Map from "@arcgis/core/Map";
import MapView from "@arcgis/core/views/MapView";
import FeatureLayer from "@arcgis/core/layers/FeatureLayer";
import Zoom from "@arcgis/core/widgets/Zoom";
import Expand from "@arcgis/core/widgets/Fullscreen";
import { MAP_LAYER } from "@/constants";
import { MapFilterContext } from "@/contexts/mapFilterContext";
import "./index.css";

const ArcgisMap = () => {
  const mapRef = useRef(null);

  const { search, filterValues, selectedDisaster } =
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
    [search.province, search.amphoe]
  );

  const map = useMemo(
    () =>
      new Map({
        basemap: "topo",
      }),
    [search.province, search.amphoe, search.level, selectedDisaster]
  );

  const allLayer = useMemo(() => {
    if (selectedDisaster && search.level) {
      return MAP_LAYER?.[selectedDisaster]?.[search.level.value];
    }
    return [];
  }, [selectedDisaster, search.level]);

  const allFeatureLayer = useMemo(() => {
    const result = allLayer
      ?.sort((a, b) => b.order - a.order)
      .flatMap((item) => item.layer);

    return result?.map((url) => {
      const layer = new FeatureLayer({
        url: formatQuery(url),
      });
      map.add(layer);
      layer.visible = false;
      return {
        layer: layer,
        url: url,
      };
    });
  }, [map, allLayer]);

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

  const layer = useMemo(() => {
    if (Object.values(filterValues).length === 0) {
      return [];
    }
    return Object.values(filterValues)
      .flatMap((obj) => Object.entries(obj))
      .filter(([_, value]) => value?.length > 0)
      .flatMap(([key, value]) => value);
  }, [filterValues]);

  useEffect(() => {
    allFeatureLayer?.forEach((item) => {
      if (layer.includes(item.url)) {
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
