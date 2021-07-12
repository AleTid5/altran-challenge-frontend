import SearchIcon from "../../assets/icons/search.icon";
import { useGnomeSearchContext } from "../../contexts/gnome-search.context";

export default function NotFoundCard() {
  const { gnomeNameFilter, gnomeHairColorsFilter } = useGnomeSearchContext();

  const getHairColorMessage = () => {
    const gnomeHairColorsFilterLength = gnomeHairColorsFilter.length;
    if (!gnomeHairColorsFilterLength) {
      return null;
    }

    return (
      <span>
        {" "}
        and <b>{gnomeHairColorsFilter.join(" or ")}</b> hair{" "}
        {gnomeHairColorsFilterLength > 1 ? "colors" : "color"}
      </span>
    );
  };

  return (
    <div className="not-found-card-container">
      <div className="not-found-card">
        <SearchIcon className="not-found-card-icon" />
        <div className="not-found-card-title">No results</div>
        <div className="not-found-card-description">
          We couldn't find Gnomes with the name <b>"{gnomeNameFilter}"</b>
          {getHairColorMessage()}! Try changing the filters!
        </div>
      </div>
    </div>
  );
}
