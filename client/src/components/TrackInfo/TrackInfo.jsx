import React from "react";
import "./trackinfo.css";
import "../generalstyles.css";

function TrackInfo(props) {
  const trackData = props.track;
  return (
    <div className="infoContainer">
      <img
        className="spotifyImage"
        src={trackData.album.images[0].url}
        alt="Track Art"
      ></img>

      <h1 className="dataTitle"> {trackData.name} </h1>

      <div className="trackInfoContainer">
        <div className="trackSection">
          <h1 className="subtitle">By</h1>
          <h1 className="text">{trackData.album.artists[0].name}</h1>
        </div>

        <div className="trackSection">
          <h1 className="subtitle">From</h1>
          <h1 className="text">{trackData.album.name}</h1>
        </div>

        <div className="trackSection">
          <h1 className="subtitle">Popularity</h1>
          <h1 className="text">{trackData.popularity}</h1>
        </div>
      </div>

      <a className="spotifyLinkTrack" href={trackData.uri}>
        Listen on Spotify
      </a>
    </div>
  );
}

export default TrackInfo;
