import GnomeIcon from "../../assets/icons/gnome.icon";
import SearchInput from "./search-input";
import HairColorSelect from "./hair-color-select";

export default function GnomeSearchBar() {
  return (
    <div className="search-bar">
      <GnomeIcon className="user-none" />
      <div className="filter-container">
        <HairColorSelect />
        <SearchInput />
      </div>
    </div>
  );
}
