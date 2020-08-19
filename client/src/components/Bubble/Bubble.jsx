import React from "react";
import "./bubble.css";

function Bubble(props) {
  let bubbleStyle = {
    background: `url(${props.artistImage})`,
    borderRadius: "100px",
    height: "100px",
    width: "100px",
  };

  return <img className="bubble" style={bubbleStyle}></img>;
}

export default Bubble;
