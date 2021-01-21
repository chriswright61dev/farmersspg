import React, { useEffect, useState } from "react";

import "./App.css";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import Venue from "./components/Venue/Venue";
import Events from "./components/Events/Events";
import PosterEvents from "./components/Events/PosterEvents";
import Drinks from "./components/Drinks/Drinks";
import Foods from "./components/Foods/Foods";
import News from "./components/News/News";
import Announcement from "./components/News/Announcement";
import Loading from "./components/Loading/Loading";
function App() {
  const [newsState, setNewsState] = useState({
    loading: false,
    newsData: null,
  });

  useEffect(() => {
    setNewsState({ loading: true });
    const newsApiUrl = "http://levenshulmelife.com/drupal9//news-farmers-api";
    fetch(newsApiUrl)
      .then((res) => res.json())
      .then((loadedData) => {
        setNewsState({ loading: false, newsData: loadedData });
      });
  }, [setNewsState]);

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
  const ns = newsState.newsData;

  if (vs && ns) {
    const announcements = ns.filter((news) => news.field_announcement);
    const announcement = announcements[0].field_announcement;
    const newsitems = ns.filter((news) => news.body);

    return (
      <div className="App">
        <Header
          logo={vs.venue_logo}
          description={vs.field_venue_description}
          name={vs.venue_name}
        />
        <Announcement data={announcement} />
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
              photo={vs.venue_image_large_480}
            />
            <News data={newsitems} />
          </div>
          <div className="events-column">
            <PosterEvents />
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
  } else return <Loading></Loading>;
}

export default App;
