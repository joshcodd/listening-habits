import React from "react";
import "./databar.css";

function DataBar(props) {
  const index = props.index + 1;
  const dataType = props.type;
  const imageURL =
    dataType === "artist"
      ? props.data.images[0].url
      : props.data.album.images[0].url;

  function handleClick() {
    props.onClick({
      isClicked: true,
      data: props.data,
      type: props.type,
    });
  }

  return (
    <div className="databar" onClick={() => handleClick()}>
      <span className="index">{index}</span>

      <img
        className={dataType === "artist" ? "artistImage" : "trackImage"}
        src={imageURL}
        alt="artist"
      ></img>

      <span className="data">{props.data.name.slice(0, 35)}</span>

      {dataType === "tracks" && (
        <span className="trackArtist">
          {props.data.artists[0].name + " - " + props.data.album.name}
        </span>
      )}
    </div>
  );
}

export default DataBar;
