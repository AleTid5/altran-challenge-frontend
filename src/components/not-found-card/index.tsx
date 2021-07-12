import SearchIcon from "../../assets/icons/search.icon";
import { useGnomeSearchContext } from "../../contexts/gnome-search.context";

export default function NotFoundCard() {
  const { gnomeNameFilter } = useGnomeSearchContext();

  return (
    <div className="not-found-card-container">
      <div className="not-found-card">
        <SearchIcon className="not-found-card-icon" />
        <div className="not-found-card-title">No results</div>
        {gnomeNameFilter.length > 0 && (
          <div className="not-found-card-description">
            We couldn't find Gnomes with the name <b>"{gnomeNameFilter}"</b>!
            Try changing the name!
          </div>
        )}
      </div>
    </div>
  );
}
