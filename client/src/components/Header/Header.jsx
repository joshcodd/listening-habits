import React from "react";
import "./header.css";
import "../generalstyles.css";

function Header(props) {
  function handleLogOut() {
    let homeURL = "http://localhost:3000/";
    if (process.env.NODE_ENV === "production") {
      homeURL = "https://listening-habits.herokuapp.com";
    }

    document.cookie = "accessToken=";
    window.location.replace(homeURL);
  }

  return (
    <div>
      <div className="profileContainer">
        <img className="profilePicture" src={props.image} alt="profile" />

        <h1 className="name">{props.name}</h1>
        <div className="followBox followCountRight">
          <h1 className="followTitle">Following</h1>
          <h1 className="followCount">{props.following}</h1>
        </div>

        <div className="followBox ">
          <h1 className="followTitle">Followers</h1>
          <h1 className="followCount">{props.followers}</h1>
        </div>
        <button className="logOut" onClick={handleLogOut}>
          Log Out
        </button>
      </div>

      <h1 className="currentTitle">Top {props.currentView.title}</h1>
      {props.children}
    </div>
  );
}

export default Header;
