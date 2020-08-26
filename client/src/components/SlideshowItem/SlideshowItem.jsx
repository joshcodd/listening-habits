import React from "react";
import "./slideshowitem.css";

function SlideshowItem(props) {
  return (
    <div className={"slideShowItem " + props.className} id={props.id}>
      {props.children}
    </div>
  );
}

export default SlideshowItem;
