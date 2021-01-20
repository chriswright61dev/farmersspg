import React from "react";
import Event from "./Event";
function EventsWithDates(props) {
  console.log("props in ev w dates", props);
  return (
    <div className="events">
      {props.data.map((anEvent) => {
        return (
          <Event
            key={anEvent.id}
            name={anEvent.event_name}
            description={anEvent.event_description}
            poster={anEvent.event_poster_220_medium}
            date={anEvent.event_date_long}
            type={anEvent.event_type}
          />
        );
      })}
    </div>
  );
}

export default EventsWithDates;
