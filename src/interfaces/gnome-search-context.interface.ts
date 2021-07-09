import { ReactNode } from "react";

export interface GnomeSearchProviderInterface {
  children: ReactNode;
}

export interface GnomeSearchContextInterface {
  filter: string;
  setFilter: (S: string) => void;
}
