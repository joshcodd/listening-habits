import React, { useEffect, useState } from "react";
import "./homescreen.css";
import Header from "../Header/Header";
import Slideshow from "../Slideshow/Slideshow";
import SlideshowItem from "../SlideshowItem/SlideshowItem";
import DataBar from "../DataBar/DataBar";
import {
  getProfileData,
  getTopArtists,
  getTopTracks,
  getFollowing,
} from "../../spotifyAPI";

function HomeScreen(props) {
  const [profileData, setProfileData] = useState({
    image: "",
    name: "",
    followers: 0,
    following: 0,
  });
  const [topArtistData, setTopArtists] = useState("");
  const [topTracksData, setTopTracks] = useState("");
  const [currentView, setCurrentView] = useState("Artists");

  useEffect(() => {
    generate();
    // eslint-disable-next-line
  }, []);

  async function generate() {
    let following = await getFollowing(props.token);
    let profile = await getProfileData(props.token);
    setProfileData({ ...profile, following: following });

    let topArtists = await getTopArtists(props.token);
    setTopArtists(topArtists);
    console.log(topArtists);

    let topTracks = await getTopTracks(props.token);
    setTopTracks(topTracks);
  }

  return (
    <div className="profile">
      <Header
        image={profileData.image}
        name={profileData.name}
        followers={profileData.followers}
        following={profileData.following}
        currentView={currentView}
      />

      <Slideshow currentView={currentView} setCurrentView={setCurrentView}>
        <SlideshowItem id="slide1">
          {topArtistData === ""
            ? null
            : topArtistData.map((artist, index) => {
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
          {topTracksData === ""
            ? null
            : topTracksData.map((track, index) => {
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
