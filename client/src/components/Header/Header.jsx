import React from "react";
import "./header.css";

function Header(props) {
  return (
    <div className="header">
      <div className="profileContainer">
        <img className="profilePicture" src={props.image} alt="profile" />

        <h1 className="name">{props.name}</h1>
        <h1 className="followTitle"> Followers " " Following</h1>
        <h1 className="followers">{props.followers}</h1>
        <h1 className="following">{props.following}</h1>
      </div>

      <h1 className="currentTitle">Top {props.currentView}</h1>
    </div>
  );
}

export default Header;
