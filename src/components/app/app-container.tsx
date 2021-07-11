import { ReactNode } from "react";
import { useGnomeSearchContext } from "../../contexts/gnome-search.context";

export default function AppContainer({ children }: { children: ReactNode }) {
  const { isSearching } = useGnomeSearchContext();
  return (
    <div className={`app-container ${isSearching ? "block-overflow" : ""}`}>
      {isSearching && <div className="gnome-search-activated" />}
      {children}
    </div>
  );
}
