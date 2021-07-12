import { useGnomeSearchContext } from "../../contexts/gnome-search.context";
import SearchIcon from "../../assets/icons/search.icon";
import { useState } from "react";

export default function SearchInput() {
  const [search, setSearch] = useState<string>("");
  const { setGnomeNameFilter, setIsSearching } = useGnomeSearchContext();

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
        onFocus={() => setIsSearching(true)}
        onBlur={() => setIsSearching(false)}
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
