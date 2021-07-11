import GnomeCard from "../gnome-card";
import useBrastlewarkAPI from "../../custom-hooks/useBrastlewarkAPI";
import { GnomeInterface } from "../../interfaces/gnome.interface";
import { useGnomeSearchContext } from "../../contexts/gnome-search.context";

const gnome = {
  id: 0,
  name: "Tobus Quickwhistle",
  thumbnail:
    "http://www.publicdomainpictures.net/pictures/10000/nahled/thinking-monkey-11282237747K8xB.jpg",
  age: 306,
  weight: 39.065952,
  height: 107.75835,
  hair_color: "Black",
  professions: [
    "Metalworker",
    "Woodcarver",
    "Stonecarver",
    " Tinker",
    "Tailor",
    "Potter",
  ],
  friends: ["Cogwitz Chillwidget", "Tinadette Chillbuster"],
} as GnomeInterface;

export default function GnomeGrid() {
  const { filter } = useGnomeSearchContext();
  const [gnomes, isLoading, error] = useBrastlewarkAPI();

  return (
    <div className="gnome-grid">
      {/*gnomes
        .filter((gnome: GnomeInterface) =>
          gnome.name.toLowerCase().includes(filter.toLowerCase())
        )
        .map((gnome: GnomeInterface, key: number) => (
          <GnomeCard key={key} gnome={gnome} />
        ))*/}
      <GnomeCard gnome={gnome} />
    </div>
  );
}
