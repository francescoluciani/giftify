import "./Dashboard.css";

function Dashboard({ setGiftManager, setWishlist }) {
  return (
    <div className="dashboard">
      <div className="userboard">
        <img
          className="userboard-picture"
          src="https://i.ibb.co/XLRcvNS/mobile.png"
          alt="userboard-picture"
        />
      </div>
      <div className="userboard-section">
        <button className="dashboard-button" onClick={setGiftManager}>
          GIFT MANAGER
        </button>
        <button className="dashboard-button" onClick={setWishlist}>
          WISHLIST
        </button>
      </div>
    </div>
  );
}

export default Dashboard;
