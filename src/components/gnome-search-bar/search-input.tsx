import { useGnomeSearchContext } from "../../contexts/gnome-search.context";

interface SearchInputProps {
  className?: string;
}

export default function SearchInput({ className }: SearchInputProps) {
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
