import React from "react";
import ReactDOM from "react-dom/client";
import ButterflyLogo from "./images/ButterflyLogo.png";
import profile from "./images/profile.png";
import search from "./images/search.png";

const HeaderComponent = () => {
  return (
    <div id="HeaderComponent">
      <div id="Logo">
        <img id="LogoImg" src={ButterflyLogo} alt="logo"></img>
      </div>

      <div id="SearchIcon">
       
      <img id="SearchBar" src={search} alt="logo"></img>

      </div>

      <div id="UserIcon">
        <img id="UserIconImg" src={profile} alt="profile"></img>
      </div>
    </div>
  );
};


const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<HeaderComponent />);
