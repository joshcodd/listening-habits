import React from "react";
import "./header.css";

function Header(props) {
  return (
    <div>
      <img className="profilePicture" src={props.image} alt="profile" />
      <h1 className="name">{props.name}</h1>
      <h1 className="currentTitle">Top {props.currentView}</h1>
    </div>
  );
}

export default Header;
