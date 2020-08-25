import React from "react";
import "./databar.css";

function DataBar(props) {
  function handleClick(data) {
    props.onClick({
      isClicked: true,
      data: data,
      type: props.type,
    });
  }

  return (
    <div className="databar" onClick={() => handleClick(props.data)}>
      <span className="index">{props.index + 1}</span>

      <img
        className={props.type === "artist" ? "artistImage" : "trackImage"}
        src={
          props.type === "artist"
            ? props.data.images[0].url
            : props.data.album.images[0].url
        }
        alt="artist"
      ></img>

      <span className="data">{props.data.name.slice(0, 35)}</span>

      {props.type === "tracks" && (
        <span className="trackArtist">
          {props.data.artists[0].name + " - " + props.data.album.name}
        </span>
      )}
    </div>
  );
}

export default DataBar;
