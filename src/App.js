import "./App.css";
import { useState } from "react";
import Dashboard from "./components/Dashboard";
import Displayer from "./components/Displayer";

function App() {
  const [app, setApp] = useState(1);

  function setGiftManager() {
    setApp(1);
  }
  function setWishlist() {
    setApp(2);
  }
  return (
    <div className="App">
      <div className="title">
        <img src="https://i.ibb.co/Nxcg8gP/Untitled-design-29.png" />
      </div>
      <Dashboard setGiftManager={setGiftManager} setWishlist={setWishlist} />
      <Displayer app={app} />
    </div>
  );
}

export default App;
