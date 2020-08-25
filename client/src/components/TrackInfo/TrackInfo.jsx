import React from "react";
import "./trackinfo.css";

function TrackInfo(props) {
  const trackData = props.track;
  return (
    <div className="container">
      <img
        className="spotifyImage"
        src={trackData.album.images[0].url}
        alt="Track Art"
      ></img>

      <h1 className="dataTitle"> {trackData.name} </h1>

      <div className="smallContainer">
        <div className="by">
          <h1 className="subtitle">By</h1>
          <h1 className="small">{trackData.album.artists[0].name}</h1>
        </div>

        <div className="from">
          <h1 className="subtitle">From</h1>
          <h1 className="small">{trackData.album.name}</h1>
        </div>

        <div className="popularity">
          <h1 className="subtitle">Popularity</h1>
          <h1 className="small">{trackData.popularity}</h1>
        </div>
      </div>

      <a className="spotifyLinkTrack" href={trackData.uri}>
        Listen on Spotify
      </a>
    </div>
  );
}

export default TrackInfo;
