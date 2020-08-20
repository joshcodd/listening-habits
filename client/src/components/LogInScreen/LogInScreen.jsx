import React from "react";
import "./loginscreen.css";

function LogInScreen() {
  let apiLogInURL = "http://localhost:5000/APIlogin";
  if (process.env.NODE_ENV === "production") {
    apiLogInURL = "https://radiant-fortress-31626.herokuapp.com/APIlogin";
  }

  return (
    <div className="LogIn">
      <div className="title"></div>
      <h1 className="listening"> Listening </h1>
      <h1 className="habits"> Habits </h1>
      <a href={apiLogInURL}>
        <button className="logInButton">Log in with Spotify</button>
      </a>
    </div>
  );
}

export default LogInScreen;
