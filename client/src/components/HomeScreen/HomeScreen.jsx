import React, { useEffect, useState } from "react";
import "./homescreen.css";
import Header from "../Header/Header";
import Slideshow from "../Slideshow/Slideshow";
import SlideshowItem from "../SlideshowItem/SlideshowItem";
import DataBar from "../DataBar/DataBar";

function HomeScreen(props) {
  const [profileData, setProfileData] = useState({
    image: "",
    name: "",
    followers: 0,
  });
  const [topArtistData, setTopArtists] = useState([]);
  const [topTracksData, setTopTracks] = useState([]);
  const [currentView, setCurrentView] = useState("Artists");

  async function getProfileData() {
    const res = await fetch("https://api.spotify.com/v1/me", {
      headers: { Authorization: "Bearer " + props.token },
    });
    const body = await res.json();

    setProfileData({
      image: body.images[0].url,
      name: body.display_name,
      followers: body.followers.total0,
    });
  }

  async function getTopArtists() {
    const res = await fetch(
      "https://api.spotify.com/v1/me/top/artists?time_range=long_term&limit=20&offset=0",
      { headers: { Authorization: "Bearer " + props.token } }
    );
    const topData = await res.json();

    let topArtists = [];
    for (let i = 0; i < 10; i++) {
      topArtists.push({
        name: topData.items[i].name,
      });
    }
    setTopArtists(topArtists);
  }

  async function getTopTracks() {
    const res = await fetch(
      "https://api.spotify.com/v1/me/top/tracks?time_range=long_term&limit=20&offset=0",
      { headers: { Authorization: "Bearer " + props.token } }
    );
    const topData = await res.json();
    console.log(topData);

    let topTracks = [];
    for (let i = 0; i < 10; i++) {
      topTracks.push({
        name: topData.items[i].name,
        artist: topData.items[i].artists[0].name,
        album: topData.items[i].album.name,
        release: topData.items[i].album.release_date,
      });
    }
    setTopTracks(topTracks);
  }

  useEffect(() => {
    getProfileData();
    getTopArtists();
    getTopTracks();
    // eslint-disable-next-line
  }, []);

  return (
    <div className="profile">
      <Header
        image={profileData.image}
        name={profileData.name}
        currentView={currentView}
      />

      <Slideshow currentView={currentView} setCurrentView={setCurrentView}>
        <SlideshowItem id="slide1">
          {topArtistData.map((artist, index) => {
            return (
              <DataBar
                key={index}
                index={index}
                type="artist"
                data={artist}
              ></DataBar>
            );
          })}
        </SlideshowItem>

        <SlideshowItem id="slide2">
          {topTracksData.map((track, index) => {
            return (
              <DataBar
                key={index}
                index={index}
                type="tracks"
                data={track}
              ></DataBar>
            );
          })}
        </SlideshowItem>
      </Slideshow>
    </div>
  );
}

export default HomeScreen;
