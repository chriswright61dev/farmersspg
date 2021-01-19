import React, { useEffect, useState } from "react";

import "./App.css";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import Venue from "./components/Venue/Venue";
import Events from "./components/Events/Events";
import Drinks from "./components/Drinks/Drinks";
import Foods from "./components/Foods/Foods";

function App() {
  const [venueState, setVenueState] = useState({
    loading: false,
    theVenueData: null,
  });

  useEffect(() => {
    setVenueState({ loading: true });
    const venueApiUrl = "http://levenshulmelife.com/drupal9/venue-farmers-api/";
    fetch(venueApiUrl)
      .then((res) => res.json())
      .then((loadedData) => {
        setVenueState({
          loading: false,
          VenueData: loadedData[0],
          // the api returns an array with one object in it
        });
      });
  }, [setVenueState]);

  const vs = venueState.VenueData;
  if (vs) {
    return (
      <div className="App">
        <Header
          logo={vs.venue_logo}
          description={vs.field_venue_description}
          name={vs.venue_name}
        />
        <div className="container">
          <div className="info-column">
            <Venue
              name={vs.venue_name}
              add1={vs.venue_address_1}
              add2={vs.venue_address_2}
              add3={vs.venue_address_3}
              postcode={vs.venue_postcode}
              email={vs.venue_email}
              telephone={vs.venue_telephone}
              photo={vs.venue_telephone_large_480}
            />
          </div>
          <div className="events-column">
            <Events />
          </div>
          <div className="drinks-column">
            <Drinks />
          </div>
          <div className="food-column">
            <Foods />
          </div>
        </div>
        <Footer />
      </div>
    );
  } else return "loading";
}

export default App;
