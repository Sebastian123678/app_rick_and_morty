const LocationInfo = ({ location }) => {
  return (
    <article className="card">
        <h2 className="card_name">{location?.name}</h2>
        <ul className="card_list">
            <li className="card_item">
              <span className="card_label">Type:</span>
              <span className="card_value">{location?.type}</span>
            </li>
            <li className="card_item">
              <span className="card_label">Dimension:</span>
              <span className="card_value">{location?.dimension || 'unknow'}</span>
            </li>
            <li className="card_item">
              <span className="card_label">Population:</span>
              <span className="card_value">{location?.residents.length}</span>
            </li>
        </ul>
    </article>
  )
}

export default LocationInfo