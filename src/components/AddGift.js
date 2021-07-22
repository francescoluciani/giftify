import "./AddFriend.css";
import { Link } from "react-router-dom";

function AddGift({ friend }) {
  return (
    <div className="dashboard">
      <div className="userboard">
        <img
          className="userboard-picture"
          src="https://i.ibb.co/m852GFz/Portrait-picture-Francesco-Luciani-copia.jpg"
          alt="userboard-picture"
        />
      </div>
      <div className="add-friend-section">
        <div className="contact-us">
          <h1 className="claim">Add a gift</h1>
        </div>
        <form>
          <input
            type="text"
            id="name"
            name="name"
            placeholder="Name of the  gift"
          ></input>
          <input
            type="text"
            id="price"
            name="price"
            placeholder="Price spent"
          ></input>
          <input
            type="text"
            id="date"
            name="date"
            placeholder="When did you buy it?"
          ></input>

          <Link to={`/gift-manager/${friend}`}>
            <input className="submit" type="submit" value="Submit"></input>
          </Link>
        </form>
      </div>
    </div>
  );
}

export default AddGift;
