import { createContext, useContext, useState } from "react";
import {
  GnomeSearchContextInterface,
  GnomeSearchProviderInterface,
} from "../interfaces/gnome-search-context.interface";

const GnomeSearchContext = createContext({
  filter: "",
  setFilter: (S: string) => {},
} as GnomeSearchContextInterface);

const { Provider } = GnomeSearchContext;

export const GnomeSearchProvider = ({
  children,
}: GnomeSearchProviderInterface) => {
  const [filter, setFilter] = useState<string>("");

  return <Provider value={{ filter, setFilter }}>{children}</Provider>;
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
