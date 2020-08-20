import React, { useEffect } from "react";
import "./splitbutton.css";

function SplitButton(props) {
  //Set button selected initially on mount
  useEffect(() => {
    let selectedButton = document.getElementById(props.currentSelection).style;
    selectedButton.backgroundColor = "white";
    selectedButton.color = "black";
  });

  function handleClick(event) {
    let prevSelect = document.getElementById(props.currentSelection).style;
    prevSelect.backgroundColor = "";
    prevSelect.color = "";
    props.setSelection(event.target.id);
  }

  return (
    <div className="buttonContainer">
      <button className={"buttonLeft"} onClick={handleClick} id="4 Weeks">
        4 Weeks
      </button>
      <button className="buttonCenter" onClick={handleClick} id="6 Months">
        6 Months
      </button>
      <button className={"buttonRight"} onClick={handleClick} id="All Time">
        All Time
      </button>
    </div>
  );
}

export default SplitButton;
