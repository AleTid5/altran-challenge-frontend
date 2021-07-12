import { useState } from "react";
import SearchIcon from "../../assets/icons/search.icon";
import { useGnomeSearchContext } from "../../contexts/gnome-search.context";
import useScreenResizing from "../../custom-hooks/useScreenResizing";

export default function SearchInput() {
  const { gnomeNameFilter, setGnomeNameFilter, setIsSearching } =
    useGnomeSearchContext();
  const [search, setSearch] = useState<string>(gnomeNameFilter);
  const { isTablet } = useScreenResizing();

  const filterGnomes = () => {
    setGnomeNameFilter(search);
    setIsSearching(false);
  };

  return (
    <div className="search-bar-input-container">
      <input
        data-testid="search-bar-input"
        type="text"
        className="search-bar-input"
        placeholder="Search a Gnome..."
        value={search}
        onFocus={() => !isTablet && setIsSearching(true)}
        onBlur={() => !isTablet && setIsSearching(false)}
        onChange={({ target: { value } }) => {
          setIsSearching(true);
          setSearch(value);
        }}
        onKeyDown={({ key }) => {
          if (key === "Enter") {
            filterGnomes();
          }
        }}
      />
      <div className="input-icon" onClick={filterGnomes}>
        <SearchIcon />
      </div>
    </div>
  );
}
