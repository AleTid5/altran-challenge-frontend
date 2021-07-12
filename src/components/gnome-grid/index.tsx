import { Suspense, lazy, useState, useEffect, useMemo } from "react";
import useBrastlewarkAPI from "../../custom-hooks/useBrastlewarkAPI";
import usePageBottom from "../../custom-hooks/usePageBottom";
import { GnomeInterface } from "../../interfaces/gnome.interface";
import { useGnomeSearchContext } from "../../contexts/gnome-search.context";
import ErrorCard from "../error-card";
import GnomeCardSkeleton from "../gnome-card/skeleton";
import NotFoundCard from "../not-found-card";
const GnomeCard = lazy(() => import("../gnome-card"));

const CARDS_TO_RENDER: number = 24;

export default function GnomeGrid() {
  const [renderedCards, setRenderedCards] = useState<number>(CARDS_TO_RENDER);
  const { gnomeNameFilter } = useGnomeSearchContext();
  const isAtTheBottom = usePageBottom();
  const [gnomes, error] = useBrastlewarkAPI();

  const filteredGnomes = useMemo(
    () =>
      gnomes.filter(
        (gnome: GnomeInterface) =>
          gnome.name.toLowerCase().includes(gnomeNameFilter.toLowerCase()) ||
          gnome.friends!.some((gnomeFriend) =>
            gnomeFriend
              .trim()
              .toLowerCase()
              .includes(gnomeNameFilter.toLowerCase())
          )
      ),
    [gnomes, gnomeNameFilter]
  );

  useEffect(() => {
    if (isAtTheBottom) {
      // Increments the cards to render
      setRenderedCards(renderedCards + CARDS_TO_RENDER);
    }
  }, [isAtTheBottom]);

  const renderGnomeGrid = () => {
    if (error) {
      return <ErrorCard error={error} />;
    }

    if (filteredGnomes.length === 0 && gnomeNameFilter.length > 0) {
      return <NotFoundCard />;
    }

    return (
      <div className="gnome-grid">
        {filteredGnomes
          .filter((_v, key: number) => key < renderedCards)
          .map((gnome: GnomeInterface, key: number) => (
            <GnomeCard key={key} gnome={gnome} />
          ))}
      </div>
    );
  };

  return (
    <Suspense fallback={<GnomeCardSkeleton />}>{renderGnomeGrid()}</Suspense>
  );
}
