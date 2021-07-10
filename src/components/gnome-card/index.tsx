import { GnomeInterface } from "../../interfaces/gnome.interface";

export default function GnomeCard({ gnome }: { gnome: GnomeInterface }) {
  return (
    <div>
      <div>{gnome.name}</div>
    </div>
  );
}
