import { Link } from "react-router-dom";
import "./Gift.css";

function AddGiftCard() {
  return (
    <Link to="/add-gift" className="add-gift-card">
      <p className="add-plus">+</p>
    </Link>
  );
}

export default AddGiftCard;
