import Gift from "./Gift";
import "./Gift.css";

function FriendGifts({ friend }) {
  console.log(friend);
  const gifts = [
    {
      user_id: "Francesco",
      name: "TV Samsung",
      value: "300€",
      date: "12-08-2020",
      picture:
        "https://i.ibb.co/m852GFz/Portrait-picture-Francesco-Luciani-copia.jpg",
    },
    {
      user_id: "Francesco",
      name: "T-Shirt Patagonia",
      value: "30€",
      date: "12-08-2020",
      picture:
        "https://i.ibb.co/m852GFz/Portrait-picture-Francesco-Luciani-copia.jpg",
    },
    {
      user_id: "Chiara",
      name: "Canon Reflex",
      value: "300€",
      date: "27-04-2020",
      picture:
        "https://i.ibb.co/m852GFz/Portrait-picture-Francesco-Luciani-copia.jpg",
    },
    {
      user_id: "Chiara",
      name: "Stand Up Paddle Board",
      value: "390€",
      date: "29-09-2020",
      picture:
        "https://i.ibb.co/m852GFz/Portrait-picture-Francesco-Luciani-copia.jpg",
    },
    {
      user_id: "Francesco",
      name: "Tickets for Juventus",
      value: "100€",
      date: "02-04-2018",
      picture:
        "https://i.ibb.co/m852GFz/Portrait-picture-Francesco-Luciani-copia.jpg",
    },
  ];

  const filtered = gifts.filter((gift) => gift.user_id == friend);
  console.log(filtered);
  return (
    <div className="gift-container">
      {gifts
        .filter((gift) => gift.user_id == friend)
        .map((gift) => (
          <Gift
            name={gift.name}
            value={gift.value}
            date={gift.date}
            picture={gift.picture}
          />
        ))}
    </div>
  );
}

export default FriendGifts;
