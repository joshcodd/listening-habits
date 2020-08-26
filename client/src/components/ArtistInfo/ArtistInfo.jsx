import React from "react";
import "./artistinfo.css";
import "../generalstyles.css";

function ArtistInfo(props) {
  const artistData = props.artist;
  return (
    <div className="infoContainer">
      <img
        className="spotifyImage"
        src={artistData.images[0].url}
        alt="Artist Art"
      ></img>

      <h1 className="dataTitle"> {artistData.name} </h1>

      <div>
        <div className="artistSection">
          <h1 className="subtitle">Followers</h1>
          <h1 className="text">{artistData.followers.total}</h1>
        </div>

        <div className="artistSection">
          <h1 className="subtitle">Popularity</h1>
          <h1 className="text">{artistData.popularity}</h1>
        </div>

        <h1 className="subtitle">Genres</h1>
        {artistData.genres.map((genre, index) => {
          return (
            <h2 key={index} className="text">
              {genre}
            </h2>
          );
        })}
      </div>

      <a className="spotifyLinkArtist" href={artistData.uri}>
        Listen on Spotify
      </a>
    </div>
  );
}

export default ArtistInfo;
