import React from "react";
import { GnomeSearchProvider } from "../../contexts/gnome-search.context";
import Background from "../background";
import GnomeSearchBar from "../gnome-search-bar";
import GnomeGrid from "../gnome-grid";
import AppContainer from "./app-container";

export default function App() {
  return (
    <Background>
      <GnomeSearchProvider>
        <GnomeSearchBar />
        <AppContainer>
          <GnomeGrid />
        </AppContainer>
      </GnomeSearchProvider>
    </Background>
  );
}
