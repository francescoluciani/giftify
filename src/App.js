import "./App.css";
import { useState, useEffect } from "react";
import { Route, Switch } from "react-router-dom";
import axios from "axios";
import Dashboard from "./components/Dashboard";
import Displayer from "./components/Displayer";
import AddFriend from "./components/AddFriend";
import AddGift from "./components/AddGift";
import FriendGifts from "./components/FriendGifts";

function App() {
  const [app, setApp] = useState(1);
  const [friend, setFriend] = useState([]);
  const [userData, setUserData] = useState({});
  const [newFriend, setNewFriend] = useState({});
  const [gift, setGift] = useState({});

  function setGiftManager() {
    setApp(1);
  }
  function setWishlist() {
    setApp(2);
  }
  function handleSetFriend(name) {
    setFriend(name.target.id);
    console.log(friend);
  }

  const fetchData = () => {
    axios.get("/api").then((data) => setUserData(data.data));
    console.log(userData);
  };

  const fetchGifts = () => {
    axios.get(`/gift-manager/${friend}`).then((data) => setGift(data.data));
  };

  useEffect(fetchData, []);

  const handleChange = (e) => {
    setNewFriend(e.target.value);
  };

  const handleClick = () => {
    fetch("/add-friend", {
      method: "POST",
      headers: {
        "Content-type": "application/json",
      },
      body: JSON.stringify({ description: newFriend }),
    })
      .then((res) => res.json())
      .then((data) => setUserData(data[0], ...userData));
  };

  return (
    <div className="App">
      <div className="title">
        <img src="https://i.ibb.co/Nxcg8gP/Untitled-design-29.png" />
      </div>
      <Switch>
        <Route exact path="/">
          <Dashboard
            setGiftManager={setGiftManager}
            setWishlist={setWishlist}
          />
        </Route>
        <Route exact path="/gift-manager">
          <Dashboard
            setGiftManager={setGiftManager}
            setWishlist={setWishlist}
          />
          <Displayer
            app={app}
            handleSetFriend={handleSetFriend}
            userData={userData}
            handleChange={handleChange}
            handleClick={handleClick}
          />
        </Route>
        <Route path="/wishlist">
          <Dashboard
            setGiftManager={setGiftManager}
            setWishlist={setWishlist}
          />
          <Displayer app={app} userData={userData} />
        </Route>
        <Route path="/add-friend">
          <AddFriend handleChange={handleChange} handleClick={handleClick} />
        </Route>
        <Route path="/add-gift">
          <AddGift friend={friend} />
        </Route>
        <Route path="/gift-manager/:id">
          <FriendGifts friend={friend} />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
