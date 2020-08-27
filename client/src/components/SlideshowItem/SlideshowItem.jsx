import React from "react";
import "./slideshowitem.css";
import "../generalstyles.css";

function SlideshowItem(props) {
  const slideShowItemData = props.children;
  const isActive = props.active;

  return (
    <div
      className={"slideShowItem " + props.className}
      style={isActive ? { opacity: "1" } : { opacity: "0" }}
      id={props.id}
    >
      {slideShowItemData.length === 0 ? (
        <h1 className="message noData"> No data to show. </h1>
      ) : (
        slideShowItemData
      )}
    </div>
  );
}

export default SlideshowItem;
