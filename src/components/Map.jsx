"use client";

import { useEffect } from "react";
import ReactDOM from "react-dom/client";
import { MapContainer, TileLayer, Marker, Popup, useMap } from "react-leaflet";
import { ZoomIn, ZoomOut, FullOut } from "@/icons";
import L from "leaflet";
import "leaflet/dist/leaflet.css";
import "./Map.css";

const CustomControl = ({ position = "topright", center, zoom }) => {
  const map = useMap();
  const style =
    "flex justify-center items-center w-14 h-[2.75rem] bg-white hover:bg-gray-100 ";

  useEffect(() => {
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
    const control = new L.Control({ position });
    control.onAdd = () => container;
    map.addControl(control);

    return () => {
      map.removeControl(control);
    };
  }, [map, position]);

  return null;
};

export const Map = () => {
  const center = [19.8737, 99.7233];
  const zoom = 13;

  return (
    <div className="relative h-full">
      <MapContainer
        center={center}
        zoom={13}
        scrollWheelZoom={false}
        className="h-full z-10"
      >
        <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
        <CustomControl center={center} zoom={zoom} />
        <Marker position={center}>
          <Popup>
            <p>ครัวเรือน: 5 ครัวเรือน</p>
            <p>จำนวน: 20 คน</p>
          </Popup>
        </Marker>
      </MapContainer>
    </div>
  );
};
