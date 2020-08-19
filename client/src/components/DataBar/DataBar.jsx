import React from "react";
import "./databar.css";

function DataBar(props) {
  return (
    <div className="databar">
      <span className="index">{props.index + 1}</span>
      <span className="data">{props.artist}</span>
    </div>
  );
}

export default DataBar;
