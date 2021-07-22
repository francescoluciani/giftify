import Friend from "./Friend.js";

function FriendsList({ handleSetFriend, userData }) {
  return (
    <div>
      {userData.map((friend) => (
        <Friend
          key={friend.name}
          name={friend.name}
          picture={friend.picture}
          handleSetFriend={handleSetFriend}
        />
      ))}
    </div>
  );
}

export default FriendsList;
