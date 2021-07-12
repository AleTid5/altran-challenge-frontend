import { useState } from "react";
import Select, { ValueType } from "react-select";
import { OptionTypeBase } from "react-select/src/types";
import makeAnimated from "react-select/animated";
import { HairColor } from "../../enums/hair-color.enum";
import { useGnomeSearchContext } from "../../contexts/gnome-search.context";

interface SelectInterface extends OptionTypeBase {
  label: string | JSX.Element;
  value: string;
}

const animatedComponents = makeAnimated();

const getHairsColors = (hairsColors: string[]) =>
  hairsColors.map(
    (hairsColor) =>
      ({
        label: (
          <div className="items-center">
            <div className="gnome-hair-color">
              <div className={hairsColor} />
            </div>
            <div className="gnome-hair-color-name">{hairsColor}</div>
          </div>
        ),
        value: hairsColor,
      } as SelectInterface)
  );

export default function HairColorSelect() {
  const { gnomeHairColorsFilter, setGnomeHairColorsFilter } =
    useGnomeSearchContext();

  const onChange = (
    colors: ValueType<{ label: string; value: string }, true>
  ) => {
    setGnomeHairColorsFilter(colors?.map(({ value }) => value));
  };

  return (
    <Select
      closeMenuOnSelect={false}
      isMulti
      components={animatedComponents}
      defaultValue={getHairsColors(gnomeHairColorsFilter)}
      options={getHairsColors(Object.keys(HairColor))}
      className="hair-color-select"
      placeholder="Pick a hair color..."
      styles={{
        control: (provided) => ({
          ...provided,
          backgroundColor: "#6e737a",
        }),
        multiValue: (provided) => ({
          ...provided,
          backgroundColor: "#636975",
          color: "white",
        }),
        placeholder: (provided) => ({
          ...provided,
          color: "#dddddd",
          fontStyle: "italic",
          fontSize: "0.833rem",
        }),
      }}
      theme={(theme) => ({
        ...theme,
        borderRadius: 8,
        spacing: {
          ...theme.spacing,
          baseUnit: 2,
          controlHeight: 15,
        },
        colors: {
          ...theme.colors,
          primary: "#fcd34d",
        },
      })}
      // @ts-ignore
      onChange={(value) => onChange(value)}
    />
  );
}
