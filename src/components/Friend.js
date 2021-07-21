import "./FriendsList.css";

function Friend({ name, number, picture }) {
  return (
    <div className="friend-card">
      <img
        className="userboard-picture"
        src={picture}
        alt="userboard-picture"
      />
      <p className="friend-name">{name}</p>
      <p className="friend-number">{number}</p>
    </div>
  );
}

export default Friend;
