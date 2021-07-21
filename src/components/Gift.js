function Gift({ name, value, date, picture }) {
  return (
    <div>
      <div className="gift-card">
        <img
          className="userboard-picture"
          src={picture}
          alt="userboard-picture"
        />
        <p className="gift-name">{name}</p>
        <p className="gift-number">{value}</p>
        <p className="gift-number">{date}</p>
      </div>
    </div>
  );
}

export default Gift;
