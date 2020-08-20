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
  convertTime,
} from "../../spotifyAPI";
import SplitButton from "../SplitButton/SplitButton";

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
  const [currentTimeSelection, setCurrentTimeSelection] = useState("All Time");

  useEffect(() => {
    generate(currentTimeSelection);
    // eslint-disable-next-line
  }, []);

  useEffect(() => {
    generate(currentTimeSelection);
    // eslint-disable-next-line
  }, [currentTimeSelection]);

  async function generate(timeSelection) {
    let timeRange = convertTime(timeSelection);

    let following = await getFollowing(document.cookie);
    let profile = await getProfileData(document.cookie);
    setProfileData({ ...profile, following: following });

    let topArtists = await getTopArtists(document.cookie, timeRange);
    setTopArtists(topArtists);

    let topTracks = await getTopTracks(document.cookie, timeRange);
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
      >
        <SplitButton
          currentSelection={currentTimeSelection}
          setSelection={setCurrentTimeSelection}
        />
      </Header>

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
