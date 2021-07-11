import { GnomeInterface } from "../../interfaces/gnome.interface";
import Tooltip from "../tooltip";
import Badge from "../badge";

export default function GnomeCard({ gnome }: { gnome: GnomeInterface }) {
  const transformNameToKebabCase = (name: string) =>
    name.trim().replace(/ /g, "-");

  const onFriendSelect = (friendId: string) => {
    document.getElementById(friendId)?.scrollIntoView({ block: "center" });
  };

  return (
    <div className="gnome-card" id={transformNameToKebabCase(gnome.name)}>
      <div className="profile space-between">
        <div className="gnome-anatomy">{gnome.weight.toFixed(2)} lbs</div>
        <div className="profile-image">
          <img
            src={gnome.thumbnail}
            alt={`${gnome.name.trim()} profile image`}
            loading="lazy"
          />
        </div>
        <div className="gnome-anatomy">{gnome.height.toFixed(2)} mts</div>
      </div>
      <div className="container">
        <div className="gnome-name">{gnome.name.trim()}</div>
        <div className="gnome-information-row">
          <div className="gnome-age">{gnome.age} years</div>
          <Tooltip text={`Hair Color: ${gnome.hair_color}`}>
            <div className="cursor-pointer gnome-hair-color">
              <div className={gnome.hair_color} />
            </div>
          </Tooltip>
        </div>
        <div className="gnome-attribute-container">
          <div className="gnome-attribute-title">
            {gnome.professions!.length > 0
              ? "Professions"
              : "Is looking for a job"}
          </div>
          <div className="gnome-badges">
            {gnome.professions?.map((profession, key) => (
              <Badge key={key} text={profession.trim()} />
            ))}
          </div>
        </div>
        <div className="gnome-attribute-container">
          <div className="gnome-attribute-title">
            {gnome.friends!.length > 0 ? "Friends" : "Is a hermit"}
          </div>
          <div className="gnome-badges">
            {gnome.friends?.map((friendName, key) => (
              <a
                key={key}
                onClick={() =>
                  onFriendSelect(transformNameToKebabCase(friendName))
                }
              >
                <Badge text={friendName.trim()} color="red" />
              </a>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
