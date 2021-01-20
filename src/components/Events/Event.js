import React from "react";
import "./Event.css";
function Event(props) {
  console.log(props);
  return (
    <div className="event">
      <p> {props.name} </p>
      <p>{props.description} </p>
      <p>{props.poster} </p>
      <p>{props.date} </p>
      <p>{props.type}</p>
    </div>
  );
}

export default Event;
