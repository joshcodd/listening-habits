import React from "react";
import "./slideshow.css";

let currentSlide = 0;

function Slideshow(props) {
  let numberOfSlides = props.children.length - 1;

  //Move to next slide if there is one.
  function handleClickDown() {
    if (currentSlide < numberOfSlides) {
      currentSlide++;
    }
    const slideTitle = props.children[currentSlide].props.title;
    props.setCurrentView({ title: slideTitle, slide: currentSlide });
  }

  //Move to previous slide if there is one.
  function handleClickUp() {
    if (currentSlide > 0) {
      currentSlide--;
    }
    const slideTitle = props.children[currentSlide].props.title;
    props.setCurrentView({ title: slideTitle, slide: currentSlide });
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
