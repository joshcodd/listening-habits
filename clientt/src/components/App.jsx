import React from "react";
import LogInScreen from "./LogInScreen/LogInScreen";
import HomeScreen from "./HomeScreen/HomeScreen";

function App(props) {
  const urlParams = window.location.pathname;

  const authorizationToken = urlParams.slice(1, urlParams.length);

  return (
    <div className="App">
      {urlParams === "/" ? (
        <LogInScreen />
      ) : (
        <HomeScreen token={authorizationToken} />
      )}
    </div>
  );
}

export default App;
