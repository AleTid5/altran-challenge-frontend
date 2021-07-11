import { Suspense, lazy } from "react";
import useBrastlewarkAPI from "../../custom-hooks/useBrastlewarkAPI";
import { GnomeInterface } from "../../interfaces/gnome.interface";
import { useGnomeSearchContext } from "../../contexts/gnome-search.context";
import GnomeCardSkeleton from "../gnome-card/skeleton";
const GnomeCard = lazy(() => import("../gnome-card"));

export default function GnomeGrid() {
  const { filter } = useGnomeSearchContext();
  const [gnomes, error] = useBrastlewarkAPI();

  return (
    <Suspense fallback={<GnomeCardSkeleton />}>
      <div className="gnome-grid">
        {gnomes
          .filter((gnome: GnomeInterface) =>
            gnome.name.toLowerCase().includes(filter.toLowerCase())
          )
          .map((gnome: GnomeInterface, key: number) => (
            <GnomeCard key={key} gnome={gnome} />
          ))}
      </div>
    </Suspense>
  );
}