import { Suspense, lazy } from "react";
import useBrastlewarkAPI from "../../custom-hooks/useBrastlewarkAPI";
import { GnomeInterface } from "../../interfaces/gnome.interface";
import { useGnomeSearchContext } from "../../contexts/gnome-search.context";
import GnomeCardSkeleton from "../gnome-card/skeleton";
import ErrorCard from "../error-card";
const GnomeCard = lazy(() => import("../gnome-card"));

export default function GnomeGrid() {
  const { filter } = useGnomeSearchContext();
  const [gnomes, error] = useBrastlewarkAPI();

  console.log(error);

  return (
    <Suspense fallback={<GnomeCardSkeleton />}>
      {error ? (
        <ErrorCard error={error} />
      ) : (
        <div className="gnome-grid">
          {gnomes
            .filter((gnome: GnomeInterface) =>
              gnome.name.toLowerCase().includes(filter.toLowerCase())
            )
            .map((gnome: GnomeInterface, key: number) => (
              <GnomeCard key={key} gnome={gnome} />
            ))}
        </div>
      )}
    </Suspense>
  );
}
