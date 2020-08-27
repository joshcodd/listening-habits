import React from "react";
import "./slideshowitem.css";
import "../generalstyles.css";

function SlideshowItem(props) {
  const slideShowItemData = props.children;

  return (
    <div className={"slideShowItem " + props.className} id={props.id}>
      {slideShowItemData.length === 0 ? (
        <h1 className="message noData"> No data to show. </h1>
      ) : (
        slideShowItemData
      )}
    </div>
  );
}

export default SlideshowItem;
