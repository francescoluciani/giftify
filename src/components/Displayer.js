import "./Displayer.css";
import GiftManager from "./GiftManager";
import Wishlist from "./Wishlist";

function Displayer({ app, handleSetFriend }) {
  return (
    <div className="displayer">
      {app == 1 ? (
        <GiftManager handleSetFriend={handleSetFriend} />
      ) : (
        <Wishlist />
      )}
    </div>
  );
}

export default Displayer;
