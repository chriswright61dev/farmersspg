import React from "react";

function RegularEvent(props) {
  return (
    <div className="event">
      <h4>{props.name}</h4>
      <div className="event_body">
        <img src={props.poster} alt={props.name} />

        <p>{props.description} </p>
        {/* <p>{props.type}</p> */}
      </div>
    </div>
  );
}
export default RegularEvent;
