import "./Displayer.css";
import GiftManager from "./GiftManager";
import Wishlist from "./Wishlist";

function Displayer({ app }) {
  return (
    <div className="displayer">{app == 1 ? <GiftManager /> : <Wishlist />}</div>
  );
}

export default Displayer;
