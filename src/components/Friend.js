import "./FriendsList.css";
import { Link } from "react-router-dom";

function Friend({ name, number, picture, handleSetFriend }) {
  return (
    <Link to={`/gift-manager/${name}`}>
      <div className="friend-card" id={name} onClick={handleSetFriend}>
        <img
          className="userboard-picture"
          src={picture}
          alt="userboard-picture"
        />
        <p className="friend-name">{name}</p>
        <p className="friend-number">{number}</p>
      </div>
    </Link>
  );
}

export default Friend;
