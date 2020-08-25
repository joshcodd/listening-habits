import React, { useEffect, useState } from "react";
import "./homescreen.css";
import Header from "../Header/Header";
import Slideshow from "../Slideshow/Slideshow";
import SlideshowItem from "../SlideshowItem/SlideshowItem";
import DataBar from "../DataBar/DataBar";
import PopUpInfo from "../PopUpInfo/PopUpInfo";
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
    image:
      "https://yt3.ggpht.com/iMT9MVrt6qxAfTxeKUX17ESdppsDntW2eA9YvnONcPqxlbdt9SkVhaIRsAtE0PFqRiLA-arexQ=s900-c-k-c0xffffffff-no-rj-mo",
    followers: 0,
    following: 0,
  });
  const [currentView, setCurrentView] = useState({
    title: "Artists",
    slide: 0,
  });
  const [currentTimeSelection, setCurrentTimeSelection] = useState("All Time");
  const [dataClicked, setDataClicked] = useState(false);
  const [topArtistData, setTopArtists] = useState([]);
  const [topTracksData, setTopTracks] = useState([]);

  useEffect(() => {
    window.location.href = `#${currentView.slide}`;
  }, [currentView, dataClicked]);

  useEffect(() => {
    generate(currentTimeSelection);
    // eslint-disable-next-line
  }, [currentTimeSelection]);

  async function generate(timeSelection) {
    let timeRange = convertTime(timeSelection);

    let following = await getFollowing(props.token);
    let profile = await getProfileData(props.token);
    setProfileData({ ...profile, following: following });

    let topArtists = await getTopArtists(props.token, timeRange);
    setTopArtists(topArtists);

    let topTracks = await getTopTracks(props.token, timeRange);
    setTopTracks(topTracks);
  }

  return (
    <div className="profile">
      {dataClicked.isClicked === true ? (
        <PopUpInfo onClick={setDataClicked} data={dataClicked}></PopUpInfo>
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
                      onClick={setDataClicked}
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
                      onClick={setDataClicked}
                    ></DataBar>
                  );
                })
              )}
            </SlideshowItem>

            <SlideshowItem className="red" title="Genres" id="2" />
          </Slideshow>{" "}
        </div>
      )}
    </div>
  );
}

export default HomeScreen;
