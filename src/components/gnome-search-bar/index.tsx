import GnomeIcon from "../../assets/icons/gnome.icon";
import SearchInput from "./search-input";

export default function GnomeSearchBar() {
  return (
    <div className="search-bar">
      <GnomeIcon className="user-none" />
      <div className="filter-container">
        <SearchInput />
      </div>
    </div>
  );
}
