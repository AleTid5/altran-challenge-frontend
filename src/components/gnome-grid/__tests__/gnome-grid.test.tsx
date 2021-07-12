import React from "react";
import { render, waitFor } from "@testing-library/react";
import { mockedGnomes } from "../../../__mocks__/gnomes.mock";
import { GnomeSearchProvider } from "../../../contexts/gnome-search.context";
import * as useBrastlewarkAPI from "../../../custom-hooks/useBrastlewarkAPI";
import { Error } from "../../../enums/error.enum";
import GnomeGrid from "../index";

const renderGnomeGrid = () =>
  render(
    <GnomeSearchProvider>
      <GnomeGrid />
    </GnomeSearchProvider>
  );

describe("Gnome Grid Test", () => {
  test("should correctly render the gnome grid", async () => {
    jest
      .spyOn(useBrastlewarkAPI, "default")
      .mockReturnValue([mockedGnomes, null]);

    const { getByText } = renderGnomeGrid();

    await waitFor(() => getByText(/Tobus Quickwhistle/i));
  });

  test("should render the error card", async () => {
    jest
      .spyOn(useBrastlewarkAPI, "default")
      .mockReturnValue([mockedGnomes, Error.FETCHING]);

    const { getByText } = renderGnomeGrid();

    await waitFor(() => getByText(/we're so sorry, there was an error!/i));

    await waitFor(() =>
      getByText(
        /the only thing you can know about the error is that it occurred when trying to obtain the data of the city of brastlewark./i
      )
    );
  });
});
