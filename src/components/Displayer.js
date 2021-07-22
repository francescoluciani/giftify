import "./Displayer.css";
import GiftManager from "./GiftManager";
import Wishlist from "./Wishlist";

function Displayer({ app, handleSetFriend, userData }) {
  console.log(userData);
  return (
    <div className="displayer">
      {app == 1 ? (
        <GiftManager handleSetFriend={handleSetFriend} userData={userData} />
      ) : (
        <Wishlist />
      )}
    </div>
  );
}

export default Displayer;
