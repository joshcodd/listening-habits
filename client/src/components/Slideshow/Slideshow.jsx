import React from "react";
import "./slideshow.css";

function Slideshow(props) {
  function handleClickDown() {
    props.slideDown();
  }

  //Move to previous slide if there is one.
  function handleClickUp() {
    props.slideUp();
  }

  return (
    <div>
      <div className="slideshow">{props.children}</div>

      <ul className="slideShowButtons">
        <li onClick={handleClickUp}>
          <img
            className="arrow upArrow"
            src="./upArrow.png"
            alt="Up Arrow"
          ></img>
        </li>

        <li onClick={handleClickDown}>
          <img
            className="arrow downArrow"
            src="./downArrow.png"
            alt="down arrow"
          ></img>
        </li>
      </ul>
    </div>
  );
}

export default Slideshow;
