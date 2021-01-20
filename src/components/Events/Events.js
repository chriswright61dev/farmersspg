import React, { useEffect, useState } from "react";
import "./Events.css";
import EventsWithDates from "./EventsWithDates";
import RegularEvents from "./RegularEvents";
function Events() {
  const [eventsState, setEventsState] = useState({
    loading: false,
    EventsData: null,
  });

  useEffect(() => {
    setEventsState({ loading: true });
    const eventsApiUrl =
      "http://levenshulmelife.com/drupal9/events-farmers-api";
    fetch(eventsApiUrl)
      .then((res) => res.json())
      .then((loadedData) => {
        setEventsState({ loading: false, EventsData: loadedData });
      });
  }, [setEventsState]);

  const es = eventsState.EventsData;
  if (es) {
    const regEvData = es.filter((event) => event.event_date === "no_date");
    const evData = es.filter((event) => event.event_date !== "no_date");

    return (
      <div className="events">
        <EventsWithDates data={evData} />
        <RegularEvents data={regEvData} />
      </div>
    );
  } else {
    return "loading";
  }
}

export default Events;
