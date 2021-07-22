import Gift from "./Gift";
import "./Gift.css";
import AddGiftCard from "./AddGiftCard";

function FriendGifts({ friend }) {
  const gifts = [
    {
      user_id: "Pierpaolo",
      name: "TV Samsung",
      value: "300€",
      date: "12-08-2020",
      picture:
        "https://i.ibb.co/D43fnCp/Schermata-2021-07-22-alle-10-41-14.png",
    },
    {
      user_id: "Pierpaolo",
      name: "T-Shirt Patagonia",
      value: "30€",
      date: "12-08-2020",
      picture:
        "https://i.ibb.co/ZNzQYgv/Schermata-2021-07-22-alle-10-42-03.png",
    },
    {
      user_id: "Chiara",
      name: "Canon Reflex",
      value: "300€",
      date: "27-04-2020",
      picture:
        "https://i.ibb.co/2kKSD8L/Schermata-2021-07-22-alle-10-49-01.png",
    },
    {
      user_id: "Chiara",
      name: "Surf Board",
      value: "390€",
      date: "29-09-2020",
      picture: "https://i.ibb.co/YbmtVHH/duotone-wam-2020-surfboard.jpg",
    },
    {
      user_id: "Pierpaolo",
      name: "Apple AirPods",
      value: "100€",
      date: "02-04-2018",
      picture:
        "https://i.ibb.co/YdGGvhw/Schermata-2021-07-22-alle-10-41-28.png",
    },
  ];

  return (
    <div className="gift-displayer">
      <div className="gift-container">
        {gifts
          .filter((gift) => gift.user_id == friend)
          .map((gift) => (
            <Gift
              key={gift.name}
              name={gift.name}
              value={gift.value}
              date={gift.date}
              picture={gift.picture}
            />
          ))}
      </div>
      <div className="gift-container">
        <AddGiftCard />
      </div>
    </div>
  );
}

export default FriendGifts;
