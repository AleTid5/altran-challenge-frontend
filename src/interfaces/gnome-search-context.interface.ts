import { ReactNode } from "react";

export interface GnomeSearchProviderInterface {
  children: ReactNode;
}

export interface GnomeSearchContextInterface {
  filter: string;
  isSearching: boolean;
  setFilter: (S: string) => void;
  setIsSearching: (S: boolean) => void;
}
