import { Link } from "react-router-dom";
import "./FriendsList.css";

function AddFriendCard() {
  return (
    <Link to="/add-friend" className="add-card">
      <p className="add-plus">+</p>
    </Link>
  );
}

export default AddFriendCard;
