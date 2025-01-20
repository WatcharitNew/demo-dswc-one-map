import Filter from "@/components/filter";
import { MapLabel } from "@/components";
import { MapFilter } from "@/containers";

export default function Home() {
  return (
    <div className="w-full h-full">
      <Filter />
      <MapFilter />
      <MapLabel />
    </div>
  );
}
