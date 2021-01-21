import React, { useEffect, useState } from "react";

import Food from "./Food";
import FoodHeader from "./FoodHeader";

import "./Foods.css";

function Foods() {
  const [foodsState, setFoodsState] = useState({
    loading: false,
    foodsData: null,
  });

  useEffect(() => {
    setFoodsState({ loading: true });
    const foodsApiUrl = "http://levenshulmelife.com/drupal9/food-farmers-api";
    fetch(foodsApiUrl)
      .then((res) => res.json())
      .then((loadedData) => {
        setFoodsState({ loading: false, foodsData: loadedData });
      });
  }, [setFoodsState]);

  const fs = foodsState.foodsData;
  if (fs) {
    return (
      <div className="foodList">
        <FoodHeader />
        {fs.map((food) => {
          return <Food key={food.id} data={food} />;
        })}
      </div>
    );
  } else {
    return "loading";
  }
}

export default Foods;
