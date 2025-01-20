import Filter from "@/components/filter";
import { MapFilter, MapContainer } from "@/containers";

export default function Home() {
  return (
    <div className="w-full h-full">
      <Filter />
      <MapFilter />
      <MapContainer/>
    </div>
  );
}
