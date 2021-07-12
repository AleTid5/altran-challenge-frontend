import { createContext, useContext, useEffect, useState } from "react";
import {
  GnomeSearchContextInterface,
  GnomeSearchProviderInterface,
} from "../interfaces/gnome-search-context.interface";

const GnomeSearchContext = createContext({
  isSearching: false,
  gnomeNameFilter: "",
  gnomeHairColorsFilter: [],
  setIsSearching: (S: boolean) => {},
  setGnomeNameFilter: (S: string) => {},
  setGnomeHairColorsFilter: (S: string[]) => {},
} as GnomeSearchContextInterface);

const { Provider } = GnomeSearchContext;

export const GnomeSearchProvider = ({
  children,
}: GnomeSearchProviderInterface) => {
  const [isSearching, setIsSearching] = useState<boolean>(false);
  const [gnomeNameFilter, setGnomeNameFilter] = useState<string>("");
  const [gnomeHairColorsFilter, setGnomeHairColorsFilter] = useState<string[]>(
    []
  );

  useEffect(() => {
    document.body.style.overflow = isSearching ? "hidden" : "auto";
  }, [isSearching]);

  return (
    <Provider
      value={{
        isSearching,
        setIsSearching,
        gnomeNameFilter,
        setGnomeNameFilter,
        gnomeHairColorsFilter,
        setGnomeHairColorsFilter,
      }}
    >
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
