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
import { FILTER_DATA } from "@/constants";
import { MapFilterContext } from "@/contexts/mapFilterContext";
import "./index.css";
import { uniqBy } from "lodash";

const ArcgisMap = () => {
  const mapRef = useRef(null);
  const [allFeatureLayer, setAllFeatureLayer] = useState([]);
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

  const allLayer = useMemo(() => {
    if (selectedDisaster && search.level) {
      const data = FILTER_DATA[selectedDisaster]?.[search.level.value];
      let newArray = [];
      data.forEach((item) => {
        if (item.data) {
          item.data.forEach((items) => {
            newArray.push({
              order: items.order,
              layer: items.layer,
              label: items.label,
            });
          });
        } else {
          newArray.push({
            order: item.order,
            layer: item.layer,
            label: item.label,
          });
        }
      });
      return newArray;
    }
    return [];
  }, [selectedDisaster, search.level]);

  const removeDuplicate = (data) => uniqBy(data, "url");

  const getPopupTemplate = async (url) => {
    try {
      const response = await fetch(`${url}?f=pjson`);
      const data = await response.json();
      return data;
    } catch (error) {
      console.error("Error fetching popup template:", error);
      return {
        title: "Feature Details",
        content: "Failed to load details.",
      };
    }
  };

  const getFormatPopupTemplate = async (layerData) => {
    const data = await getPopupTemplate(layerData.url);
    const templateName = data?.templates?.[0]?.name
      .replace(/_/g, " ")
      .replace(/^\w/, (c) => c.toUpperCase());

    const fieldInfos = data?.fields
      .reduce((acc, item) => {
        if (item.type !== "esriFieldTypeOID") {
          acc.push({
            label: item.alias,
            fieldName: item.modelName,
          });
        }
        return acc;
      }, [])
      .sort((a, b) => a.label.localeCompare(b.label));

    return layerData?.title
      ? {
          title: layerData.title.replace("{template_name}", templateName),
          content: [
            {
              type: "fields",
              fieldInfos: fieldInfos,
            },
          ],
        }
      : undefined;
  };

  const formatMap = useCallback(
    async (layerData) => {
      const layer = new FeatureLayer({
        url: formatQuery(layerData.url),
        popupEnabled: !!layerData?.title,
        popupTemplate: await getFormatPopupTemplate(layerData),
      });

      map.add(layer);
      layer.visible = false;
      return {
        layer,
        url: layerData.url,
      };
    },
    [map]
  );

  useEffect(() => {
    const loadLayer = async () => {
      const formatL = removeDuplicate(
        allLayer
          ?.sort((a, b) => b.order - a.order)
          .flatMap((item) => item.layer)
      );
      const result = await Promise.all(formatL.map((item) => formatMap(item)));
      setAllFeatureLayer(result);
    };
    loadLayer();
  }, [map, allLayer, formatMap]);

  const layer = useMemo(() => {
    if (Object.values(filterValues).length === 0) {
      return [];
    }
    return Object.values(filterValues)
      .flatMap((obj) => Object.entries(obj))
      .filter(([_, value]) => value?.length > 0)
      .flatMap(([_, value]) => value)
      .map((item) => item.url);
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
    <div
      className="map w-full sm:max-h-[46rem] sm:h-[46rem] 2xl:max-h-[54rem] 2xl:h-[54rem]"
      ref={mapRef}
    />
  );
};

export default ArcgisMap;
