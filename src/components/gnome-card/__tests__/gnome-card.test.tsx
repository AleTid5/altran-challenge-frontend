import React from "react";
import { render } from "@testing-library/react";
import GnomeCard from "../index";
import { GnomeInterface } from "../../../interfaces/gnome.interface";

interface PropsInterface {
  gnome: GnomeInterface;
}

describe("Gnome Card Test", () => {
  let props: PropsInterface;

  beforeEach(() => {
    props = {
      gnome: {
        id: 0,
        name: "Tobus Quickwhistle",
        thumbnail:
          "http://www.publicdomainpictures.net/pictures/10000/nahled/thinking-monkey-11282237747K8xB.jpg",
        age: 306,
        weight: 39.065952,
        height: 107.75835,
        hair_color: "Pink",
        professions: [
          "Metalworker",
          "Woodcarver",
          "Stonecarver",
          "Tinker",
          "Tailor",
          "Potter",
        ],
        friends: ["Cogwitz Chillwidget", "Tinadette Chillbuster"],
      } as GnomeInterface,
    };
  });

  test("should render the gnome card", () => {
    const { getByText } = render(<GnomeCard {...props} />);

    getByText(/tobus quickwhistle/i);
    getByText(/hair color: pink/i);
    getByText(/woodcarver/i);
    getByText(/cogwitz chillwidget/i);
  });

  test("should render the gnome card without professions", () => {
    props.gnome.professions = [];

    const { getByText } = render(<GnomeCard {...props} />);

    getByText(/is looking for a job/i);
    getByText(/cogwitz chillwidget/i);
  });

  test("should render the gnome card without friends", () => {
    props.gnome.friends = [];

    const { getByText } = render(<GnomeCard {...props} />);

    getByText(/is a hermit/i);
    getByText(/woodcarver/i);
  });

  test("should render the gnome card without professions and friends", () => {
    props.gnome.professions = [];
    props.gnome.friends = [];

    const { getByText } = render(<GnomeCard {...props} />);

    getByText(/is looking for a job/i);
    getByText(/is a hermit/i);
  });
});
