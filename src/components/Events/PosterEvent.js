import React from "react";

function PosterEvent(props) {
  return (
    <div className="poster-event">
      <img src={props.poster} alt={props.title} />
    </div>
  );
}

export default PosterEvent;
