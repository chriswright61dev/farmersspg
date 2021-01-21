import React from "react";
import "./PosterEvent.css";
function PosterEvent(props) {
  return (
    <div className="poster-event">
      <img src={props.poster} alt={props.title} />
    </div>
  );
}

export default PosterEvent;
