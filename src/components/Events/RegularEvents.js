import React from "react";
import RegularEvent from "./RegularEvent";
function RegularEvents(props) {
  return (
    <div className="events">
      {props.data.map((anEvent) => {
        return (
          <RegularEvent
            key={anEvent.id}
            name={anEvent.event_name}
            description={anEvent.event_description}
            poster={anEvent.event_poster_220_medium}
            type={anEvent.event_type}
          />
        );
      })}
    </div>
  );
}

export default RegularEvents;
