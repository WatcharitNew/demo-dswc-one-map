import { MapFilter } from "@/containers";
import Filter from "@/components/filter";


export default function Home() {
  return (
    <div className="w-full h-full">
      <Filter />
      <MapFilter />
    </div>
  );
}
