import "./FriendsList.css";
import FriendsList from "./FriendsList";
import AddFriendCard from "./AddFriendCard";

function GiftManager({ handleSetFriend, userData }) {
  return (
    <div className="friend-container">
      <p className="gift-manager-title">GIFT MANAGER</p>
      <p className="gift-manager-subtitle">Insert people you care the most</p>
      <FriendsList handleSetFriend={handleSetFriend} userData={userData} />
      <AddFriendCard />
    </div>
  );
}

export default GiftManager;
