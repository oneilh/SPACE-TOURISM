import React from "react";
import "./App.css";
import Home from "./pages/home/home";
import Navbar from "./components/Nav/Navbar";
import backgroundImage from "./assets/home/background-home-mobile.jpg";

function App() {
  return (
    <div className="bg-image"
      style={{
        backgroundImage: `url(
            ${backgroundImage}
          )`,
      }}
    >
      <div className="container">
        <Navbar />
        <Home />
      </div>
    </div>
  );
}

export default App;
