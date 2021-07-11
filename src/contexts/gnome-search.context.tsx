import { createContext, useContext, useEffect, useState } from "react";
import {
  GnomeSearchContextInterface,
  GnomeSearchProviderInterface,
} from "../interfaces/gnome-search-context.interface";

const GnomeSearchContext = createContext({
  filter: "",
  isSearching: false,
  setFilter: (S: string) => {},
  setIsSearching: (S: boolean) => {},
} as GnomeSearchContextInterface);

const { Provider } = GnomeSearchContext;

export const GnomeSearchProvider = ({
  children,
}: GnomeSearchProviderInterface) => {
  const [filter, setFilter] = useState<string>("");
  const [isSearching, setIsSearching] = useState<boolean>(true);

  useEffect(() => {
    document.body.style.overflow = isSearching ? "hidden" : "auto";
  }, [isSearching]);

  return (
    <Provider value={{ filter, isSearching, setFilter, setIsSearching }}>
      {children}
    </Provider>
  );
};

export const useGnomeSearchContext = () => {
  const context = useContext(GnomeSearchContext);

  if (!context) {
    throw new Error(
      "useGnomeSearchContext must be used within a GnomeSearchProvider"
    );
  }

  return context;
};
