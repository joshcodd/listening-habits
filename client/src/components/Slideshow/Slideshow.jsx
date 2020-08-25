import React from "react";
import "./slideshow.css";

let currentSlide = 0;

function Slideshow(props) {
  let numberOfSlides = props.children.length - 1;

  function handleClickDown() {
    if (currentSlide < numberOfSlides) {
      currentSlide++;
    }

    window.location.href = `#${currentSlide}`;
    const slideTitle = props.children[currentSlide].props.title;
    props.setCurrentView(slideTitle);
  }

  function handleClickUp() {
    if (currentSlide > 0) {
      currentSlide--;
    }
    window.location.href = `#${currentSlide}`;

    const slideTitle = props.children[currentSlide].props.title;
    props.setCurrentView(slideTitle);
  }

  return (
    <div>
      <div className="slideshow">{props.children}</div>

      <ul className="buttons">
        <li onClick={handleClickUp}>
          <img className="upArrow" src="./upArrow.png" alt="Up Arrow"></img>
        </li>

        <li className="navigate">Navigate</li>

        <li onClick={handleClickDown}>
          <img
            className="downArrow"
            src="./downArrow.png"
            alt="down arrow"
          ></img>
        </li>
      </ul>
    </div>
  );
}

export default Slideshow;
