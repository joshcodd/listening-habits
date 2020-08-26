import React, { useEffect, useState } from "react";
import "./homescreen.css";
import Header from "../Header/Header";
import Slideshow from "../Slideshow/Slideshow";
import SlideshowItem from "../SlideshowItem/SlideshowItem";
import DataBar from "../DataBar/DataBar";
import PopUpInfo from "../PopUpInfo/PopUpInfo";
import SplitButton from "../SplitButton/SplitButton";
import PieChart from "../PieChart/PieChart";
import {
  getProfileData,
  getTopArtists,
  getTopTracks,
  getFollowing,
  convertTime,
  getTopGenres,
} from "../../spotifyAPI";

function HomeScreen(props) {
  const accessToken = props.token;
  const [profileData, setProfileData] = useState({
    image: "/placeholder.jpg",
    followers: 0,
    following: 0,
  });
  const [currentView, setCurrentView] = useState({
    title: "Artists",
    slide: 0,
  });
  const [currentTimeSelection, setCurrentTimeSelection] = useState("All Time");
  const [showMoreInfo, setShowMoreInfo] = useState(false);
  const [topArtistData, setTopArtists] = useState([]);
  const [topTracksData, setTopTracks] = useState([]);
  const [topGenres, setTopGenres] = useState([]);

  //Display current slide
  useEffect(() => {
    window.location.href = `#${currentView.slide}`;
  }, [currentView, showMoreInfo]);

  //Get data from Spotify API on split button change.
  useEffect(() => {
    getSpotifyData();
    // eslint-disable-next-line
  }, [currentTimeSelection]);

  //Get all spotify data and set result as state.
  async function getSpotifyData() {
    let timeRange = convertTime(currentTimeSelection);

    let following = await getFollowing(accessToken);
    let profile = await getProfileData(accessToken);
    setProfileData({ ...profile, following: following });

    let topArtists = await getTopArtists(accessToken, timeRange);
    setTopArtists(topArtists);

    let topTracks = await getTopTracks(accessToken, timeRange);
    setTopTracks(topTracks);

    let topGenres = await getTopGenres(accessToken, timeRange);
    setTopGenres(topGenres);
  }

  //Return pop up information if has been requested, homepage (header + slideshow) if not.
  return (
    <div className="homeContainer">
      {showMoreInfo.isClicked === true ? (
        <PopUpInfo onClick={setShowMoreInfo} data={showMoreInfo}></PopUpInfo>
      ) : (
        <div>
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
            <SlideshowItem id="0" title="Artists">
              {topArtistData === "error" ? (
                <h1 className="error"> Error please try again later </h1>
              ) : (
                topArtistData.map((artist, index) => {
                  return (
                    <DataBar
                      key={index}
                      index={index}
                      type="artist"
                      data={artist}
                      onClick={setShowMoreInfo}
                    ></DataBar>
                  );
                })
              )}
            </SlideshowItem>

            <SlideshowItem id="1" title="Tracks">
              {topTracksData === "error" ? (
                <h1 className="error"> Error please try again later </h1>
              ) : (
                topTracksData.map((track, index) => {
                  return (
                    <DataBar
                      key={index}
                      index={index}
                      type="tracks"
                      data={track}
                      onClick={setShowMoreInfo}
                    ></DataBar>
                  );
                })
              )}
            </SlideshowItem>

            <SlideshowItem id="2" title="Genres">
              <PieChart data={topGenres} />
            </SlideshowItem>
          </Slideshow>
        </div>
      )}
    </div>
  );
}

export default HomeScreen;
