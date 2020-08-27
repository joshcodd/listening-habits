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
  const defaultProfile = {
    image: "/placeholder.png",
    following: 0,
    followers: 0,
  };
  const [currentView, setCurrentView] = useState({
    title: "Artists",
    slide: 0,
  });
  const [currentTimeSelection, setCurrentTimeSelection] = useState("All Time");
  const [showMoreInfo, setShowMoreInfo] = useState(false);

  //Display current slide
  useEffect(() => {
    window.location.href = `#${currentView.slide}`;
  }, [currentView, showMoreInfo]);

  //Hook to load in data from api when currentTime selection is updated.
  //Only return current request.
  function useLoad(loader, args) {
    const [loadedData, setLoadedData] = useState(null);

    useEffect(() => {
      let isCurrentRequest = true;
      loader(...args).then((result) => {
        if (isCurrentRequest) {
          setLoadedData(result);
        }
      });
      return () => {
        isCurrentRequest = false;
      };
      // eslint-disable-next-line
    }, [loader, ...args]);
    return loadedData;
  }

  //Use hook to get Spotify data
  const profileData = useLoad(getProfileData, [accessToken]) || defaultProfile;
  const following = useLoad(getFollowing, [accessToken]) || 0;
  profileData.following = following;

  const topArtistData =
    useLoad(getTopArtists, [accessToken, convertTime(currentTimeSelection)]) ||
    [];

  const topTracksData =
    useLoad(getTopTracks, [accessToken, convertTime(currentTimeSelection)]) ||
    [];

  const topGenres =
    useLoad(getTopGenres, [accessToken, convertTime(currentTimeSelection)]) ||
    [];

  // Return pop up information if has been requested, homepage (header + slideshow) if not.
  // If API call returns error then error message is displayed within slideshow item.
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
                <h1 className="message error">Error please try again later.</h1>
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
                <h1 className="message error">Error please try again later.</h1>
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
              {topGenres === "error" ? (
                <h1 className="message error">Error please try again later</h1>
              ) : (
                <PieChart data={topGenres} />
              )}
            </SlideshowItem>
          </Slideshow>
        </div>
      )}
    </div>
  );
}

export default HomeScreen;
