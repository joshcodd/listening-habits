import React from "react";
import "./loginscreen.css";

function LogInScreen() {
  // async function callAPILogIn() {
  //   const res = await fetch("/APIlogin/");
  //   const body = res.json();
  //   return body;
  // }

  // function handleClick() {
  //   callAPILogIn().then(
  //     (res) => console.log(res), //on success
  //     (err) => console.log(err) //on error
  //   );
  // }

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
