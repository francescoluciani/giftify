import "./App.css";
import { useState } from "react";
import { Route, Switch } from "react-router-dom";
import Dashboard from "./components/Dashboard";
import Displayer from "./components/Displayer";
import AddFriend from "./components/AddFriend";
import FriendGifts from "./components/FriendGifts";

function App() {
  const [app, setApp] = useState(1);
  const [friend, setFriend] = useState([]);

  function setGiftManager() {
    setApp(1);
  }
  function setWishlist() {
    setApp(2);
  }

  function handleSetFriend(name) {
    setFriend(name.target.id);
  }

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
          <Displayer app={app} handleSetFriend={handleSetFriend} />
        </Route>
        <Route path="/wishlist">
          <Dashboard
            setGiftManager={setGiftManager}
            setWishlist={setWishlist}
          />
          <Displayer app={app} />
        </Route>
        <Route path="/add-friend">
          <AddFriend />
        </Route>
        <Route path="/gift-manager/:id">
          <FriendGifts friend={friend} />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
