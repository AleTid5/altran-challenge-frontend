import React from "react";
import { GnomeSearchProvider } from "../../contexts/gnome-search.context";
import Background from "../background";
import GnomeSearchBar from "../gnome-search-bar";
import GnomeGrid from "../gnome-grid";

export default function App() {
  return (
    <Background>
      <GnomeSearchProvider>
        <GnomeSearchBar />
        <GnomeGrid />
      </GnomeSearchProvider>
    </Background>
  );
}
