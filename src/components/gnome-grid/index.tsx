import GnomeCard from "../gnome-card";
import useBrastlewarkAPI from "../../custom-hooks/useBrastlewarkAPI";
import { GnomeInterface } from "../../interfaces/gnome.interface";
import { useGnomeSearchContext } from "../../contexts/gnome-search.context";

export default function GnomeGrid() {
  const { filter } = useGnomeSearchContext();
  const [gnomes, isLoading, error] = useBrastlewarkAPI();

  return (
    <div>
      {gnomes
        .filter((gnome: GnomeInterface) =>
          gnome.name.toLowerCase().includes(filter.toLowerCase())
        )
        .map((gnome: GnomeInterface, key: number) => (
          <GnomeCard key={key} gnome={gnome} />
        ))}
    </div>
  );
}
