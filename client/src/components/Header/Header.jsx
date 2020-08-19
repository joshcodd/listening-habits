import React from "react";
import "./header.css";

function Header(props) {
  return (
    <div className="header">
      <div className="profileContainer">
        <img className="profilePicture" src={props.image} alt="profile" />

        <h1 className="name">{props.name}</h1>
        <div className="followBox followLeft">
          <h1 className="followTitle">Following</h1>
          <h1 className="follow">{props.following}</h1>
        </div>

        <div className="followBox ">
          <h1 className="followTitle">Followers</h1>
          <h1 className="follow">{props.followers}</h1>
        </div>
      </div>

      <h1 className="currentTitle">Top {props.currentView}</h1>
    </div>
  );
}

export default Header;
