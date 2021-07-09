import React from "react";
import { GnomeSearchProvider } from "../../contexts/gnome-search.context";
import Background from "../Background";
import GnomeSearchBar from "../GnomeSearchBar";
import GnomeGrid from "../GnomeGrid";

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
