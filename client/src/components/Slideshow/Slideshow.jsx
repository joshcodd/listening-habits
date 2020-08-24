import React from "react";
import "./slideshow.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faReply } from "@fortawesome/free-solid-svg-icons";

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
        <li>
          <a href onClick={handleClickUp}>
            <img className="upArrow" src="./upArrow.png" alt="up"></img>
          </a>
        </li>

        <li className="navigate">Navigate</li>

        <li>
          <a onClick={handleClickDown}>
            <img className="downArrow" src="./downArrow.png" alt="up"></img>
          </a>
        </li>
      </ul>
    </div>
  );
}

export default Slideshow;
