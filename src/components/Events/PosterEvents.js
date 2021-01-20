import React, { useEffect, useState } from "react";
import PosterEvent from "./PosterEvent";
function PosterEvents() {
  const [eventsState, setEventsState] = useState({
    loading: false,
    EventsData: null,
  });

  useEffect(() => {
    setEventsState({ loading: true });
    const eventsApiUrl =
      "http://levenshulmelife.com/drupal9/poster-event-farmers-api";
    fetch(eventsApiUrl)
      .then((res) => res.json())
      .then((loadedData) => {
        setEventsState({ loading: false, EventsData: loadedData });
      });
  }, [setEventsState]);

  const es = eventsState.EventsData;
  if (es) {
    return (
      <div className="poster-events">
        {es.map((aPosterEvent) => {
          return (
            <PosterEvent
              key={aPosterEvent.id}
              poster={aPosterEvent.poster_event_image}
              title={aPosterEvent.poster_event_title}
            />
          );
        })}
      </div>
    );
  } else {
    return "loading";
  }
}

export default PosterEvents;
