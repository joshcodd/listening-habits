import React from "react";
import "./loginscreen.css";

function LogInScreen() {
  return (
    <div className="LogIn">
      <div className="title"></div>
      <h1 className="listening"> Listening </h1>
      <h1 className="habits"> Habits </h1>
      {/* <a href="http://localhost:5000/APIlogin"> */}
      <a href="https://radiant-fortress-31626.herokuapp.com/APIlogin">
        <button className="logInButton">Log in with Spotify</button>
      </a>
    </div>
  );
}

export default LogInScreen;
