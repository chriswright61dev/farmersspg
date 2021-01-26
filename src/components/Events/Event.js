import React from "react";
import { DateFormat } from "../Appfunctions/AppFunctions";
import "./Event.css";
function Event(props) {
  const theDateData = DateFormat(props.date);

  return (
    <div className="event">
      <h4>{props.name}</h4>
      <div className="event_body">
        <div className="event_image">
          <img src={props.poster} alt={props.name} />
        </div>

        <div className="event_text">
          <p className="event_date">
            {theDateData.dayofweek} {theDateData.daysuffix} {theDateData.month}{" "}
            {theDateData.ampm}
          </p>
          <p className="event_description">{props.description} </p>
        </div>

        {/* <p>{props.date} </p> */}
        {/* <p>{props.type}</p> */}
      </div>
    </div>
  );
}

export default Event;
