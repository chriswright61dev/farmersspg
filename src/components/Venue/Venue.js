import React from "react";
import "./Venue.css";
function Venue(props) {
  // console.log("props.photo", props.photo);
  return (
    <div className="venue">
      <img src={props.photo} alt={props.name} />
      <div className="venue-info">
        <h1>{props.name}</h1>
        <p> {props.add1}</p>
        <p> {props.add2}</p>
        <p> {props.add3}</p>
        <p> {props.postcode}</p>
        <p>{props.email}</p>
        <p> {props.telephone}</p>
      </div>
    </div>
  );
}

export default Venue;
