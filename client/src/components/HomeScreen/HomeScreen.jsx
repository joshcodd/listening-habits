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

  const [topData, setTopData] = useState([]);
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

    console.log(profileData);
  }

  async function getTopData() {
    const res = await fetch(
      "https://api.spotify.com/v1/me/top/artists?time_range=long_term&limit=20&offset=0",
      { headers: { Authorization: "Bearer " + props.token } }
    );
    const topData = await res.json();

    let topArtists = [];
    for (let i = 0; i < 10; i++) {
      topArtists.push(topData.items[i].name);
    }
    setTopData(topArtists);
  }

  useEffect(() => {
    getProfileData();
    getTopData();
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
        <SlideshowItem className="blue" id="slide1">
          {topData.map((artist, index) => {
            return <DataBar index={index} artist={artist}></DataBar>;
          })}
        </SlideshowItem>

        <SlideshowItem className="red" id="slide2" />
      </Slideshow>
    </div>
  );
}

export default HomeScreen;
