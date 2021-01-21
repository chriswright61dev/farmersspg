import React from "react";
import "./RegularEvent.css";
function RegularEvent(props) {
  return (
    <div className="regular_event">
      <h4>{props.name}</h4>
      <div className="regular_event_body">
        <div className="regular_event_image">
          <img src={props.poster} alt={props.name} />
        </div>

        <p>{props.description} </p>
        {/* <p>{props.type}</p> */}
      </div>
    </div>
  );
}
export default RegularEvent;
