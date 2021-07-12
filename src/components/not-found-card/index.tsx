import SearchIcon from "../../assets/icons/search.icon";

export default function NotFoundCard() {
  return (
    <div className="not-found-card-container">
      <div className="not-found-card">
        <SearchIcon className="not-found-card-icon" />
        <div className="not-found-card-title">No results</div>
        <div className="not-found-card-description">
          There are no Gnomes with that name! Try changing the filter!
        </div>
      </div>
    </div>
  );
}
