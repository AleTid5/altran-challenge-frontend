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
const hairsColors = Object.keys(HairColor).map(
  (hairsColor) =>
    ({
      label: hairsColor,
      value: hairsColor,
    } as SelectInterface)
);

export default function HairColorSelect() {
  const { setGnomeHairColorsFilter } = useGnomeSearchContext();

  const onChange = (
    colors: ValueType<{ label: string; value: string }, true>
  ) => {
    setGnomeHairColorsFilter(colors?.map(({ label }) => label));
  };

  return (
    <Select
      closeMenuOnSelect={false}
      components={animatedComponents}
      defaultValue={null}
      isMulti
      options={hairsColors}
      className="hair-color-select"
      // @ts-ignore
      onChange={(value) => onChange(value)}
    />
  );
}
