import "./FriendsList.css";
import FriendsList from "./FriendsList";

function GiftManager() {
  return (
    <div className="friend-container">
      <p className="gift-manager-title">GIFT MANAGER</p>
      <p className="gift-manager-subtitle">Insert people you care the most</p>
      <FriendsList />
    </div>
  );
}

export default GiftManager;
