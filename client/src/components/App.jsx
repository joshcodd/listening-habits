import React from "react";
import LogInScreen from "./LogInScreen/LogInScreen";
import HomeScreen from "./HomeScreen/HomeScreen";

function App(props) {
  const urlParams = window.location.pathname;
  const authorizationToken = urlParams.slice(1, urlParams.length);

  if (document.cookie === "") {
    document.cookie = authorizationToken;
  }

  let token = document.cookie;
  console.log(token);

  return (
    <div className="App">
      {token === "" ? (
        <LogInScreen />
      ) : (
        <HomeScreen token={authorizationToken} />
      )}
    </div>
  );
}

export default App;
