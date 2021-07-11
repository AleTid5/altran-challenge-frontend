import BarIcon from "../../assets/icons/bar.icon";
import SearchInput from "./search-input";

export default function GnomeSearchBar() {
  return (
    <div className="search-bar">
      <BarIcon className="cursor-pointer" />
      <SearchInput />
    </div>
  );
}
