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
          theVenueData: loadedData[0],
          // the api returns an array with one object in it
        });
      });
  }, [setVenueState]);

  console.log("venueState", venueState);

  field_venue_description: "Lounge and Sports Bar"
  ​​
  venue_address_1: "254 Burnage Lane"
  ​​
  venue_address_2: "Burnage"
  ​​
  venue_address_3: "Manchester"
  ​​
  venue_email: "farmersburnage@gmail.com"
  ​​
  venue_id: "2"
  ​​
  venue_image_large_480: "http://levenshulmelife.com/drupal9/sites/default/files/style…ge/public/2021-01/farmers-burnage-exterior.jpg?itok=ZEPzswTb "
  ​​
  venue_image_medium_220: "http://levenshulmelife.com/http://levenshulmelife.com//drupal9/sites/default/files/2021-01/farmers-burnage-exterior.jpg"
  ​​
  venue_image_original: "http://levenshulmelife.com//drupal9/sites/default/files/2021-01/farmers-burnage-exterior.jpg"
  ​​
  venue_image_thumbnail: "http://levenshulmelife.com//drupal9/sites/default/files/styl…il/public/2021-01/farmers-burnage-exterior.jpg?itok=z5_ATBqH"
  ​​
  venue_image_wide: "http://levenshulmelife.com/http://levenshulmelife.com//drupal9/sites/default/files/2021-01/farmers-burnage-exterior.jpg"
  ​​
  venue_logo: "http://levenshulmelife.com/drupal9/sites/default/files/2021-01/farmers-arms-burnage-logo-white-no-bg.svg"
  ​​
  venue_name: "Farmers Arms"
  ​​
  venue_postcode: "M19 1EN"
  ​​
  venue_telephone: "0161 432 6441"







  return (
    <div className="App">
      <Header />
      <div className="container">
        <div className="info-column">
          <Venue />
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
}

export default App;
