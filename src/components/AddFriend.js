import "./AddFriend.css";
import { Link } from "react-router-dom";
function AddFriend() {
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
          <h1 className="claim">Add a friend</h1>
        </div>
        <form>
          <input
            type="text"
            id="fname"
            name="firstname"
            placeholder="Name"
          ></input>
          <input
            type="text"
            id="email"
            name="email"
            placeholder="Picture URL"
          ></input>

          <Link to="/gift-manager">
            <input className="submit" type="submit" value="Submit"></input>
          </Link>
        </form>
      </div>
    </div>
  );
}

export default AddFriend;
