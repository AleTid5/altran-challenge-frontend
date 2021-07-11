import { HairColor } from "../enums/hair-color.enum";

export interface GnomeInterface {
  id: number;
  name: string;
  thumbnail: string;
  age: number;
  weight: number;
  height: number;
  hair_color: HairColor;
  professions?: string[];
  friends?: string[];
}
