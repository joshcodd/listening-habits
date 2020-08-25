import React from "react";
import "./artistinfo.css";

function ArtistInfo(props) {
  const artistData = props.artist;
  return (
    <div className="container">
      <img
        className="spotifyImage"
        src={artistData.images[0].url}
        alt="Artist Art"
      ></img>

      <h1 className="dataTitle"> {artistData.name} </h1>

      <div>
        <div className="followers">
          <h1 className="subtitle">Followers</h1>
          <h1 className="large">{artistData.followers.total}</h1>
        </div>

        <div className="popularity">
          <h1 className="subtitle">Popularity</h1>
          <h1 className="large">{artistData.popularity}</h1>
        </div>

        <h1 className="subtitle">Genres</h1>
        {artistData.genres.map((genre, index) => {
          return (
            <h2 key={index} className="genre">
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
