import { Suspense, lazy, useState, useEffect } from "react";
import useBrastlewarkAPI from "../../custom-hooks/useBrastlewarkAPI";
import { GnomeInterface } from "../../interfaces/gnome.interface";
import { useGnomeSearchContext } from "../../contexts/gnome-search.context";
import GnomeCardSkeleton from "../gnome-card/skeleton";
import ErrorCard from "../error-card";
import usePageBottom from "../../custom-hooks/usePageBottom";
const GnomeCard = lazy(() => import("../gnome-card"));

const CARDS_TO_RENDER: number = 24;

export default function GnomeGrid() {
  const [renderedCards, setRenderedCards] = useState<number>(CARDS_TO_RENDER);
  const { filter } = useGnomeSearchContext();
  const isAtTheBottom = usePageBottom();
  const [gnomes, error] = useBrastlewarkAPI();

  useEffect(() => {
    if (isAtTheBottom) {
      // Increments the cards to render
      setRenderedCards(renderedCards + CARDS_TO_RENDER);
    }
  }, [isAtTheBottom]);

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
            .filter((_v, key: number) => key < renderedCards)
            .map((gnome: GnomeInterface, key: number) => (
              <GnomeCard key={key} gnome={gnome} />
            ))}
        </div>
      )}
    </Suspense>
  );
}
