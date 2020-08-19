import React from "react";
import "./slideshow.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faReply } from "@fortawesome/free-solid-svg-icons";

function Slideshow(props) {
  function handleClickDown() {
    props.setCurrentView("Tracks");
  }

  function handleClickUp() {
    props.setCurrentView("Artists");
  }

  return (
    <div>
      <div className="slideshow">
        <div className="item blue" id="slide1">
          {/* {topData.map((artist) => {
            return <div className="artist">{artist}</div>;
          })} */}
        </div>
        <div className="item red" id="slide2"></div>
      </div>

      <ul className="buttons">
        <li className="upArrow">
          <a href="#slide1" onClick={handleClickUp}>
            <FontAwesomeIcon icon={faReply} size="3x" color="white" />
          </a>
        </li>

        <li className="downArrow">
          <a href="#slide2" onClick={handleClickDown}>
            <FontAwesomeIcon icon={faReply} size="3x" color="white" />
          </a>
        </li>
      </ul>
    </div>
  );
}

export default Slideshow;
