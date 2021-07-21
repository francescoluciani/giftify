import "./FriendsList.css";
import FriendsList from "./FriendsList";
import AddFriendCard from "./AddFriendCard";

function GiftManager({ handleSetFriend }) {
  return (
    <div className="friend-container">
      <p className="gift-manager-title">GIFT MANAGER</p>
      <p className="gift-manager-subtitle">Insert people you care the most</p>
      <FriendsList handleSetFriend={handleSetFriend} />
      <AddFriendCard />
    </div>
  );
}

export default GiftManager;
