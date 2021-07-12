import React from "react";
import { fireEvent, render, waitFor } from "@testing-library/react";
import { mockedGnomes } from "../../../__mocks__/gnomes.mock";
import * as useBrastlewarkAPI from "../../../custom-hooks/useBrastlewarkAPI";
import App from "../index";

describe("Gnome Grid Test", () => {
  test("should correctly render the gnome grid", async () => {
    jest
      .spyOn(useBrastlewarkAPI, "default")
      .mockReturnValue([mockedGnomes, null]);

    const { getByText } = render(<App />);

    await waitFor(() => getByText(/tobus quickwhistle/i));
  });

  test("should correctly filter the gnomes", async () => {
    jest
      .spyOn(useBrastlewarkAPI, "default")
      .mockReturnValue([mockedGnomes, null]);

    const { getByText, getByTestId, queryByText } = render(<App />);

    const input = getByTestId("search-bar-input");
    await waitFor(() => getByText(/tobus quickwhistle/i));
    getByText(/fizkin voidbuster/i);

    fireEvent.change(input, { target: { value: "tobus" } });
    fireEvent.keyDown(input, { key: "Enter", keyCode: 13 });

    getByText(/tobus quickwhistle/i);
    expect(queryByText(/fizkin voidbuster/i)).toBeNull();
  });

  test("should correctly filter the gnomes and render the not found card", async () => {
    jest
      .spyOn(useBrastlewarkAPI, "default")
      .mockReturnValue([mockedGnomes, null]);

    const { getByText, getByTestId, queryByText } = render(<App />);

    const input = getByTestId("search-bar-input");
    await waitFor(() => getByText(/tobus quickwhistle/i));
    getByText(/fizkin voidbuster/i);

    fireEvent.change(input, { target: { value: "Lorem ipsum" } });
    fireEvent.keyDown(input, { key: "Enter", keyCode: 13 });

    expect(queryByText(/fizkin voidbuster/i)).toBeNull();
    getByText(/"lorem ipsum"/i);
    getByText(/try changing the name!/i);
  });

  test("should correctly filter the gnomes, render the not found card and reset the filter", async () => {
    jest
      .spyOn(useBrastlewarkAPI, "default")
      .mockReturnValue([mockedGnomes, null]);

    const { getByText, getByTestId, queryByText } = render(<App />);

    const input = getByTestId("search-bar-input");
    await waitFor(() => getByText(/tobus quickwhistle/i));
    getByText(/fizkin voidbuster/i);

    fireEvent.change(input, { target: { value: "Lorem ipsum" } });
    fireEvent.keyDown(input, { key: "Enter", keyCode: 13 });

    expect(queryByText(/fizkin voidbuster/i)).toBeNull();
    getByText(/"lorem ipsum"/i);
    getByText(/try changing the name!/i);

    fireEvent.change(input, { target: { value: "" } });
    fireEvent.keyDown(input, { key: "Enter", keyCode: 13 });

    getByText(/tobus quickwhistle/i);
    getByText(/fizkin voidbuster/i);
  });
});
