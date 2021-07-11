import { GnomeInterface } from "../../interfaces/gnome.interface";
import Tooltip from "../tooltip";

export default function GnomeCard({ gnome }: { gnome: GnomeInterface }) {
  return (
    <div className="gnome-card">
      <div className="profile space-between">
        <div className="gnome-anatomy">{gnome.weight.toFixed(2)} lbs</div>
        <div className="profile-image">
          <img src={gnome.thumbnail} alt={`${gnome.name} profile image`} />
        </div>
        <div className="gnome-anatomy">{gnome.height.toFixed(2)} cms</div>
      </div>
      <div className="container">
        <div className="gnome-name">{gnome.name}</div>
        <div className="gnome-information-row">
          <div className="gnome-age">{gnome.age} years</div>
          <Tooltip text={`Hair Color: ${gnome.hair_color}`}>
            <div className="cursor-pointer gnome-hair-color">
              <div className={gnome.hair_color} />
            </div>
          </Tooltip>
        </div>
      </div>
    </div>
  );
}
