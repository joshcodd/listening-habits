import React from "react";
import LogInScreen from "../LogInScreen/LogInScreen";
import HomeScreen from "../HomeScreen/HomeScreen";

function App(props) {
  let token = document.cookie;
  token = token.slice(12, token.length);

  return (
    <div className="App">
      {token === "" ? <LogInScreen /> : <HomeScreen token={token} />}
    </div>
  );
}

export default App;
