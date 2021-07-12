import { ReactNode } from "react";

export interface GnomeSearchProviderInterface {
  children: ReactNode;
}

export interface GnomeSearchContextInterface {
  gnomeNameFilter: string;
  setGnomeNameFilter: (S: string) => void;
  isSearching: boolean;
  setIsSearching: (S: boolean) => void;
}
