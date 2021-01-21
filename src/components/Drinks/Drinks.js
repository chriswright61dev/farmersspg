import React, { useEffect, useState } from "react";
import DrinksOffers from "./DrinksOffers/DrinksOffers";
import "./Drinks.css";
function Drinks() {
  const [drinksState, setDrinksState] = useState({
    loading: false,
    DrinksData: null,
  });

  useEffect(() => {
    setDrinksState({ loading: true });
    const drinksApiUrl =
      "http://levenshulmelife.com/drupal9/drinks-farmers-api";
    fetch(drinksApiUrl)
      .then((res) => res.json())
      .then((loadedData) => {
        setDrinksState({ loading: false, DrinksData: loadedData });
      });
  }, [setDrinksState]);
  // console.log(drinksState);
  const ds = drinksState.DrinksData;
  if (ds) {
    // filter out the beer offers - not empty
    let drinksOffersData = ds.filter((drink) => drink.drink_offer_price);

    return (
      // <div className="drinks">
      <DrinksOffers data={drinksOffersData} />
      // </div>
    );
  } else {
    return "loading drinks data";
  }
}

export default Drinks;
