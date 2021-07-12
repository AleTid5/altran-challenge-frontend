import { useEffect, useState } from "react";
import BarIcon from "../../assets/icons/bar.icon";
import CloseIcon from "../../assets/icons/close.icon";
import GnomeIcon from "../../assets/icons/gnome.icon";
import { useGnomeSearchContext } from "../../contexts/gnome-search.context";
import useScreenResizing from "../../custom-hooks/useScreenResizing";
import HairColorSelect from "./hair-color-select";
import SearchInput from "./search-input";

export default function GnomeSearchBar() {
  const [areFiltersOpened, setAreFiltersOpened] = useState<boolean>(false);
  const { isTablet } = useScreenResizing();
  const { isSearching, setIsSearching } = useGnomeSearchContext();

  useEffect(() => {
    if (!isTablet && areFiltersOpened) {
      setAreFiltersOpened(false);
      setIsSearching(false);
    }
  }, [isTablet]);

  useEffect(() => {
    setAreFiltersOpened(isSearching);
  }, [isSearching]);

  return (
    <div className="search-bar">
      {isTablet ? (
        <div
          className="cursor-pointer"
          onClick={() => {
            setAreFiltersOpened(!areFiltersOpened);
            setIsSearching(!areFiltersOpened);
          }}
        >
          {areFiltersOpened ? <CloseIcon /> : <BarIcon />}
        </div>
      ) : (
        <GnomeIcon className="user-none" />
      )}
      {!isTablet && (
        <div className="filter-container">
          <HairColorSelect />
          <SearchInput />
        </div>
      )}
      {isTablet && areFiltersOpened && (
        <div className="mobile-search-container">
          <div className="filter-container">
            <SearchInput />
            <HairColorSelect />
          </div>
        </div>
      )}
    </div>
  );
}
