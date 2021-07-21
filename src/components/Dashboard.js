import "./Dashboard.css";
import { Link } from "react-router-dom";

function Dashboard({ setGiftManager, setWishlist }) {
  return (
    <div className="dashboard">
      <div className="userboard">
        <img
          className="userboard-picture"
          src="https://i.ibb.co/m852GFz/Portrait-picture-Francesco-Luciani-copia.jpg"
          alt="userboard-picture"
        />
      </div>
      <div className="userboard-section">
        <Link
          to="/gift-manager"
          className="dashboard-button"
          onClick={setGiftManager}
        >
          GIFT MANAGER
        </Link>
        <Link to="/wishlist" className="dashboard-button" onClick={setWishlist}>
          WISHLIST
        </Link>
      </div>
    </div>
  );
}

export default Dashboard;
