import React from "react";
import "./loginscreen.css";
import $ from "jquery";

function LogInScreen() {
  return (
    <div className="LogIn">
      <div className="title"></div>
      <h1 className="listening"> Listening </h1>
      <h1 className="habits"> Habits </h1>
      <a href="http://localhost:5000/APIlogin">
        <button className="logInButton">Log in with Spotify</button>
      </a>
    </div>
  );
}

export default LogInScreen;
