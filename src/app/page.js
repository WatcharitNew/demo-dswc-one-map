import { Filter } from "@/components";
import { MapContainer } from "@/containers";

export default function Home() {
  return (
    <div className="w-full h-full">
      <Filter />
      <MapContainer />
    </div>
  );
}
