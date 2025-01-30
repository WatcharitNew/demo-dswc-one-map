"use client";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import CustomControl from "./CustomControl";
import "leaflet/dist/leaflet.css";
import "./Map.css";

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
