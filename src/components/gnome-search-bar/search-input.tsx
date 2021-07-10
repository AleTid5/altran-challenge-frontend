import { useGnomeSearchContext } from "../../contexts/gnome-search.context";

interface SearchInputInterface {
  className?: string;
}

export default function SearchInput({ className }: SearchInputInterface) {
  const { setFilter } = useGnomeSearchContext();

  return (
    <input
      type="text"
      className={className}
      placeholder="Search a Gnome..."
      onChange={({ target: { value } }) => setFilter(value)}
    />
  );
}
