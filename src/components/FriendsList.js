import Friend from "./Friend.js";

function FriendsList() {
  const friends = [
    {
      name: "Chiara",
      number: 3,
      picture:
        "https://i.ibb.co/m852GFz/Portrait-picture-Francesco-Luciani-copia.jpg",
    },
    {
      name: "Francesco",
      number: 5,
      picture:
        "https://i.ibb.co/m852GFz/Portrait-picture-Francesco-Luciani-copia.jpg",
    },
  ];
  return (
    <div>
      {friends.map((friend) => (
        <Friend
          name={friend.name}
          number={friend.number}
          picture={friend.picture}
        />
      ))}
    </div>
  );
}

export default FriendsList;
