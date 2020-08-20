import React from "react";
import "./databar.css";

function DataBar(props) {
  return (
    <div className="databar">
      <span className="index">{props.index + 1}</span>

      <img
        className={props.type === "artist" ? "artistImage" : "trackImage"}
        src={props.data.image}
        alt="artist"
      ></img>

      <span className="data">{props.data.name.slice(0, 35)}</span>

      {props.type === "tracks" && (
        <span className="trackArtist">
          {props.data.artist + " - " + props.data.album}
        </span>
      )}
    </div>
  );
}

export default DataBar;
