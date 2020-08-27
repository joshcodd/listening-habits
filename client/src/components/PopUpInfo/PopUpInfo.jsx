import React, { useState, useEffect } from "react";
import "./popupinfo.css";
import ArtistInfo from "../ArtistInfo/ArtistInfo";
import TrackInfo from "../TrackInfo/TrackInfo";

function PopUpInfo(props) {
  const [isVisible, setIsvisible] = useState();
  const data = props.data.data;
  const type = props.data.type;

  useEffect(() => {
    setIsvisible(true);
  }, []);

  return (
    <div
      className="popUpContainer"
      style={isVisible ? { opacity: "100" } : { opacity: "0" }}
    >
      <div className="arrowContainer">
        <img
          className="backArrow"
          src="./backArrow.png"
          onClick={() => {
            setIsvisible(false);
            setTimeout(() => props.onClick(false), 500);
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
