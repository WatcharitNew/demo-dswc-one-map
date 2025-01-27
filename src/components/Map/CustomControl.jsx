"use client";
import { useEffect } from "react";
import ReactDOM from "react-dom/client";
import { useMap } from "react-leaflet";
import L from "leaflet";
import { ZoomIn, ZoomOut, FullOut } from "@/icons";
import "leaflet/dist/leaflet.css";
import "./Map.css";

const CustomControl = ({ position = "topright", center, zoom }) => {
  const map = useMap();
  const style =
    "flex justify-center items-center w-14 h-[2.75rem] bg-white hover:bg-gray-100 ";

  useEffect(() => {
    let control;
    if (typeof window !== "undefined") {
      const container = L.DomUtil.create("div", "leaflet-control");
      const root = ReactDOM.createRoot(container);

      const controlElement = (
        <div className="col items-center">
          <button
            className={`${style} rounded-t-lg`}
            onClick={() => map.setZoom(map.getZoom() + 1)}
          >
            <ZoomIn />
          </button>
          <button
            className={style}
            onClick={() => map.setZoom(map.getZoom() - 1)}
          >
            <ZoomOut />
          </button>
          <button
            className={`${style} rounded-b-lg`}
            onClick={() => map.setView(center, zoom)}
          >
            <FullOut />
          </button>
        </div>
      );

      root.render(controlElement);
      control = new L.Control({ position });
      control.onAdd = () => container;
      map.addControl(control);
    }

    return () => {
      if (control) {
        map?.removeControl(control);
      }
    };
  }, [map, position]);

  return null;
};

export default CustomControl;
