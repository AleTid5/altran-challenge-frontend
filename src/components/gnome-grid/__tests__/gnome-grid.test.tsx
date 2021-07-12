import React from "react";
import { render, waitFor } from "@testing-library/react";
import { mockedGnomes } from "../../../__mocks__/gnomes.mock";
import * as useBrastlewarkAPI from "../../../custom-hooks/useBrastlewarkAPI";
import GnomeGrid from "../index";

describe("Gnome Grid Test", () => {
  test("should correctly render the gnome grid", async () => {
    jest
      .spyOn(useBrastlewarkAPI, "default")
      .mockReturnValue([mockedGnomes, null]);

    const { getByText } = render(<GnomeGrid />);

    await waitFor(() => getByText(/Tobus Quickwhistle/i));
  });
});
