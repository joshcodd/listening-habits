import React from "react";
import "./popupinfo.css";
import ArtistInfo from "../ArtistInfo/ArtistInfo";
import TrackInfo from "../TrackInfo/TrackInfo";

function PopUpInfo(props) {
  const data = props.data.data;
  const type = props.data.type;

  return (
    <div>
      <div className="arrowContainer">
        <img
          className="backArrow"
          src="./backArrow.png"
          onClick={() => {
            props.onClick(false);
          }}
          alt="Back Arrow"
        />
      </div>
      {type === "artist" ? (
        <ArtistInfo artist={data} />
      ) : (
        <TrackInfo track={data} />
      )}
    </div>
  );
}

export default PopUpInfo;
