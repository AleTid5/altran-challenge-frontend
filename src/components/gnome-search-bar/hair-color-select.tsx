import { useState } from "react";
import Select, { ValueType } from "react-select";
import { OptionTypeBase } from "react-select/src/types";
import makeAnimated from "react-select/animated";
import { HairColor } from "../../enums/hair-color.enum";
import { useGnomeSearchContext } from "../../contexts/gnome-search.context";

interface SelectInterface extends OptionTypeBase {
  label: string;
  value: string;
}

const animatedComponents = makeAnimated();

const getHairsColors = (hairsColors: string[]) =>
  hairsColors.map(
    (hairsColor) =>
      ({
        label: hairsColor,
        value: hairsColor,
      } as SelectInterface)
  );

export default function HairColorSelect() {
  const { gnomeHairColorsFilter, setGnomeHairColorsFilter } =
    useGnomeSearchContext();

  const onChange = (
    colors: ValueType<{ label: string; value: string }, true>
  ) => {
    setGnomeHairColorsFilter(colors?.map(({ label }) => label));
  };

  return (
    <Select
      closeMenuOnSelect={false}
      isMulti
      components={animatedComponents}
      defaultValue={getHairsColors(gnomeHairColorsFilter)}
      options={getHairsColors(Object.keys(HairColor))}
      className="hair-color-select"
      // @ts-ignore
      onChange={(value) => onChange(value)}
    />
  );
}
